import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';

const getAudios = async (q, limit, page) => {
  const url = `${SERVER_API_URL}/audio?q=${q}&page=${page}&limit=${limit}`;
  const result = await axios.get(url);
  return result.data;
};

const getAudioById = async id => {
  const url = `${SERVER_API_URL}/audio/${id}`;
  const result = await axios.get(url);
  return result.data;
};

export { getAudios, getAudioById };
