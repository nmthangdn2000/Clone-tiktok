import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';

const getVideo = async (query = '', limit = 10, page = 1) => {
  const url = `${SERVER_API_URL}/video/all?page=${page}&q=${query}&limit${limit}`;
  const result = await axios.get(url);
  return result.data;
};

const getVideoById = async id => {
  const url = `${SERVER_API_URL}/video/detail/${id}`;
  const result = await axios.get(url);
  return result.data;
};

const getVideoByUserId = async id => {
  const url = `${SERVER_API_URL}/video/list/user/${id}`;
  const result = await axios.get(url);
  return result.data;
};

const getVideoByUserAuth = async (token, privacy = false, page = 1) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url = `${SERVER_API_URL}/video/list/user?privacy=${privacy}`;
  const result = await axios.get(url, config);
  return result.data;
};

const getVideoLikeByUserAuth = async (token, page = 1, limit = 40) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url = `${SERVER_API_URL}/like?page=${page}&q=${limit}`;
  const result = await axios.get(url, config);
  return result.data;
};

const getVideoLikeByIdUser = async (idUser, page = 1, limit = 40) => {
  const url = `${SERVER_API_URL}/like/${idUser}?page=${page}&q=${limit}`;
  const result = await axios.get(url);
  return result.data;
};

const postVideo = async (data, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
  };

  const url = `${SERVER_API_URL}/video`;
  const result = await axios({
    method: 'post',
    url,
    data,
    headers,
    timeout: 15000,
  });
  return result.data;
};

export {
  getVideo,
  postVideo,
  getVideoById,
  getVideoByUserId,
  getVideoByUserAuth,
  getVideoLikeByIdUser,
  getVideoLikeByUserAuth,
};
