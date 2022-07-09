import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';

const getComment = async (idComment, page = 1) => {
  const url = `${SERVER_API_URL}/comment/${idComment}?page=${page}`;
  const result = await axios.get(url);
  return result.data;
};

const postComment = async (video, comment, token) => {
  const data = {
    video,
    comment,
  };
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/comment`;
  const result = await axios.post(url, data, config);
  return result.data;
};

export { getComment, postComment };
