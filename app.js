import 'dotenv/config.js';
import * as server from './start/server';
import * as database from './start/database';
import * as drive from './helpers/driver.helper';
import * as mailer from './helpers/mailer';

(async () => {
  try {
    server.start();
    await database.connect();
    // await drive.connect();
    // drive.listFiles();
    // mailer.sendMail(
    //   'uptimumdn2000@gmail.com',
    //   'Test send Email',
    //   '<a href="https://www.w3schools.com/nodejs/nodejs_email.asp">hsadhijashdjkaskjdkjsad</a>'
    // );
  } catch (e) {
    console.log(`Cannot start server. Error: ${e}`);
  }
})();
