import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';

const like = async (idVideo, type = 'like', token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/like/${idVideo}/${type}`;
  const result = await axios.get(url, config);
  return result.data;
};

export { like };
