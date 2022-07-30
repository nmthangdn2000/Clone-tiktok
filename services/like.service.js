import mongoose from 'mongoose';
import { ERROR } from '../common/constants';
import LikeModel from '../models/like.model';
import VideoModel from '../models/video.model';
import UserModel from '../models/user.model';
import * as videoService from './video.service';
import * as notificationService from './notification.service';

const getByUser = async ({ user, id }) => {
  if (!user) {
    const privacy = await UserModel.findById(id).select('privacy');
    if (privacy.privacy.like) throw new Error(ERROR.VideoPrivate);
  }

  const query = { users: user ? user : id };

  const like = await LikeModel.find(query)
    .populate('video', 'background like')
    .select('-users -createdAt -updatedAt -_id');

  if (!like) throw new Error(ERROR.CanNotGetLikeVideo);

  return like?.length > 0 ? like.map((item) => item.video) : [];
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

  const numberLike = like.users.length > 0 ? ike.users.length - 1 : like.users.length;
  await videoService.updateById(id, { like: numberLike });
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
  notificationService.likeNotification(id, user).catch((err) => console.log(err));
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
