import axios from 'axios';
import { SERVER_API_URL } from '../constants/constants';
import { UserModel } from '../models/User.model';

const getUser = async (
  query = '',
  limit = 10,
  page = 1,
): Promise<UserModel[]> => {
  const url = `${SERVER_API_URL}/user?page=${page}&q=${query}&limit=${limit}`;
  const result = await axios.get(url);
  return result.data;
};

const getUserById = async (id: string): Promise<UserModel> => {
  const url = `${SERVER_API_URL}/user/${id}`;
  const result = await axios.get(url);
  return result.data;
};

export { getUser, getUserById };
