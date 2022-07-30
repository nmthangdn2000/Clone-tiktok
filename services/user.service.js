import { ERROR, LIMIT, PAGE, RESPONSE } from '../common/constants';
import UserModel from '../models/user.model';
import VideoModel from '../models/video.model';
import { deleteFile, pagination } from './base.service';
import * as likeService from './like.service';
import * as followService from './follow.service';
import mongoose from 'mongoose';

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
  const getUsers = UserModel.aggregate([
    { $match: query },
    {
      $lookup: {
        from: 'videos',
        localField: '_id',
        foreignField: 'author',
        as: 'videos',
      },
    },
    {
      $addFields: {
        totalVideo: {
          $size: '$videos',
        },
      },
    },
    { $project: { videos: 0 } },
    { $skip: page * limit - limit },
    { $limit: Number(limit) },
  ]);
  const [total, users] = await Promise.all([count, getUsers]);
  if (!users) throw new Error(ERROR.CanNotGetUser);
  return {
    data: users,
    currentPage: Number(page),
    totalPage: pagination(total, limit),
  };
};

const getById = async (id) => {
  if (!id) throw new Error(ERROR.CanNotGetUser);
  const getUser = UserModel.findById(id).lean();
  const getSumLike = likeService.getSumLikeByUser(new mongoose.Types.ObjectId(id));
  const getFollow = followService.getByUser(id);
  const getTotalVideo = VideoModel.find({ author: new mongoose.Types.ObjectId(id) }).countDocuments();
  const [user, totalLike, follow, totalVideo] = await Promise.all([getUser, getSumLike, getFollow, getTotalVideo]);
  if (!user) throw new Error(ERROR.CanNotGetUser);
  const follower = follow ? follow.follower : 0;
  const following = follow ? follow.following : 0;
  return { ...user, totalLike, follower, following, totalVideo };
};

const deleteById = async (id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteUser);
  const user = await UserModel.findByIdAndDelete(id);
  if (!user) throw new Error(ERROR.CanNotDeleteUser);
  deleteFile(user.avatar);
};

const updateById = async (id, data, avatar) => {
  if (!id) throw new Error(ERROR.CanNotUpdateUser);
  if (avatar) data.avatar = `avatars/${avatar}`;
  const user = await UserModel.findByIdAndUpdate(id, { ...data, updatedAt: new Date() });
  if (!user) throw new Error(ERROR.CanNotUpdateUser);

  deleteFile(user.avatar);
};

const getInforUser = async () => {};

export { filter, getById, deleteById, updateById };
