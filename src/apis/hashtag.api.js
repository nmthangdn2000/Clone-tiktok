import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';

const getHashtags = async (q, limit, page) => {
  const url = `${SERVER_API_URL}/hashtag?q=${q}&page=${page}&limit=${limit}`;
  const result = await axios.get(url);
  return result.data;
};

export { getHashtags };
