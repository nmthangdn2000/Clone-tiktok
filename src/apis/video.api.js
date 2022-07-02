import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';

const getVideo = async (page = 1, query = '') => {
  const url = `${SERVER_API_URL}/video/all?page=${page}&q=${query}`;
  console.log(url);
  const result = await axios.get(url);
  return result.data;
};

export { getVideo };
