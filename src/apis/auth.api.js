import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';

const signIn = async (email, password) => {
  const data = {
    email,
    password,
  };
  const url = `${SERVER_API_URL}/login`;
  const result = await axios.post(url, data);
  return result.data;
};

const signUp = async (name, email, password) => {
  const data = {
    name,
    email,
    password,
  };
  const url = `${SERVER_API_URL}/register`;
  const result = await axios.post(url, data);
  return result.data;
};

export { signIn, signUp };
