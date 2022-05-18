import fs from 'fs';
import readline from 'readline';
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
const TOKEN_PATH = 'token.json';
let O_AUTH_2_CLIENT = null;
let DRIVE = null;
let FOLDER_ID = '';

const connect = async () => {
  try {
    const content = fs.readFileSync('credentials.json');
    if (content) await authorize(JSON.parse(content));
    DRIVE = google.drive({ version: 'v3', auth: O_AUTH_2_CLIENT });
  } catch (error) {
    console.log('Error loading client secret file:', error.message);
  }
};

const authorize = async (credentials) => {
  const { client_secret, client_id, redirect_uris } = credentials.web;
  O_AUTH_2_CLIENT = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  try {
    const token = fs.readFileSync(TOKEN_PATH);
    O_AUTH_2_CLIENT.setCredentials(JSON.parse(token));
  } catch (error) {
    await getAccessToken(O_AUTH_2_CLIENT);
  }
};

const getAccessToken = (oAuth2Client) => {
  return new Promise((resolve) => {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        resolve('ok');
      });
    });
  });
};

const listFiles = () => {
  DRIVE.files.list(
    {
      pageSize: 10,
      fields: 'nextPageToken, files(id, name)',
    },
    (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const files = res.data.files;
      if (files.length) {
        console.log('Files:');
        files.map((file) => {
          console.log(`${file.name} (${file.id})`);
        });
      } else {
        console.log('No files found.');
      }
    }
  );
};

const getFolderId = async () => {
  // Using the NPM module 'async'
  await DRIVE.files.list(
    {
      q: 'name="files upload"',
      fields: 'nextPageToken, files(id, name, mimeType)',
      spaces: 'drive',
    },
    function (err, res) {
      if (err) {
        // Handle error
        console.error(err);
      } else {
        FOLDER_ID = res.data.files[0].id;
      }
    }
  );
};

export { connect, listFiles };
