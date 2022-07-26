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
  return result?.data?.data;
};

const getUserById = async (id: string | null): Promise<UserModel> => {
  const url = `${SERVER_API_URL}/user/${id}`;
  const result = await axios.get(url);
  return result?.data?.data;;
};

const updateUser = async (data: UserModel, token: string | null): Promise<UserModel> => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${SERVER_API_URL}/user/`;
  const result = await axios.put(url, data, config);
  return result.data;
};

export { getUser, getUserById, updateUser };
