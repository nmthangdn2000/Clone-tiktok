const Visibility = Object.freeze({
  Hidden: 0,
  Visible: 1,
});

const SERVER_DOMAIN = 'http://192.168.1.4:3000';
const SERVER_API_URL = 'http://192.168.1.4:3000/api';

const KEY_STORAGE = Object.freeze({
  TOKEN: 'token',
  ID_USER: 'id_user',
  SEARCH_HIS: 'search_his',
});

export { Visibility, SERVER_API_URL, SERVER_DOMAIN, KEY_STORAGE };
