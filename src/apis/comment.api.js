import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';

const getComment = async (idComment, page = 1) => {
  const url = `${SERVER_API_URL}/comment/${idComment}?page=${page}`;
  const result = await axios.get(url);
  return result.data;
};

export { getComment };
