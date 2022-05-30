import mongoose from 'mongoose';
import { ERROR } from '../common/constants';
import LikeModel from '../models/like.model';
import VideoModel from '../models/video.model';
import * as videoService from './video.service';

const getByUser = async (user) => {
  const like = await LikeModel.find({ users: user }).populate('users', 'name userName avatar');
  if (!like) throw new Error(ERROR.CanNotGetLikeVideo);
  return like;
};

const create = async (video) => {
  const newLike = new LikeModel({
    video,
    users: [],
  });
  const like = await newLike.save();
  if (!like) throw new Error(ERROR.CanNotCreateLike);
};

const deleteByVideo = async (video) => {
  if (!video) throw new Error();
  const like = await LikeModel.findOneAndDelete({ video });
  if (!like) throw new Error(ERROR.CanNotDeleteLike);
};

const dislike = async (user, id) => {
  if (!id || !user) throw new Error(ERROR.CanNotDislike);
  const like = await LikeModel.findOneAndUpdate(
    { video: id },
    { $pull: { users: user }, updatedAt: new Date() },
    { multi: true }
  );
  if (!like) throw new Error(ERROR.CanNotDislike);

  await videoService.updateById(id, { $inc: { like: -1 } });
};

const like = async (user, id) => {
  if (!id || !user) throw new Error(ERROR.CanNotLike);
  const update = await LikeModel.findOneAndUpdate({ video: id }, { $addToSet: { users: user } });
  if (!update) throw new Error(ERROR.CanNotLike);

  const countLike = await LikeModel.aggregate([
    { $match: { video: mongoose.Types.ObjectId(id) } },
    {
      $project: {
        video: 1,
        users: { $size: '$users' },
      },
    },
  ]);

  await videoService.updateById(id, { like: countLike[0].users });
};

const getSumLikeByUser = async (user) => {
  const sumLike = await VideoModel.aggregate([
    { $match: { author: mongoose.Types.ObjectId(user) } },
    { $group: { _id: null, sum: { $sum: '$like' } } },
  ]);
  if (!sumLike) throw new Error(ERROR.CanNotGetSumLike);
  return sumLike[0]?.sum;
};

export { getSumLikeByUser, getByUser, dislike, like, create, deleteByVideo };
