import { ERROR, LIMIT, PAGE, RESPONSE } from '../common/constants';
import UserModel from '../models/user.model';
import { deleteFile, pagination } from './base.service';
import * as likeService from './like.service';
import * as followService from './follow.service';

const filter = async (q = '', page = PAGE, limit = LIMIT, sort) => {
  const query = q
    ? {
        $or: [
          {
            $text: { $search: q },
          },
        ],
      }
    : {};
  const count = UserModel.find(query).countDocuments();
  // chưa làm sort
  const getUsers = UserModel.find(query)
    .skip(page * limit - limit)
    .limit(Number(limit));
  const [total, users] = await Promise.all([count, getUsers]);
  if (!users) throw new Error(ERROR.CanNotGetUser);
  return {
    data: users,
    currentPage: Number(page),
    totalPage: pagination(total, limit),
  };
};

const getById = async (id) => {
  const getUser = UserModel.findById(id).lean();
  const getSumLike = likeService.getSumLikeByUser(id);
  const getFollow = followService.getByUser(id);
  const [user, totalLike, follow] = await Promise.all([getUser, getSumLike, getFollow]);
  if (!user) throw new Error(ERROR.CanNotGetUser);
  const follower = follow ? follow.follower : 0;
  const following = follow ? follow.following : 0;
  return { ...user, totalLike, follower, following };
};

const deleteById = async (id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteUser);
  const user = await UserModel.findByIdAndDelete(id);
  if (!user) throw new Error(ERROR.CanNotDeleteUser);
  deleteFile(user.avata);
};

const updateById = async (id, data) => {
  if (!id) throw new Error(ERROR.CanNotUpdateUser);
  const update = await UserModel.updateOne({ _id: id }, { ...data, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotUpdateUser);
};

export { filter, getById, deleteById, updateById };
