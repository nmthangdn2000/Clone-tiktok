import mongoose from 'mongoose';
import { ERROR, LIMIT, PAGE } from '../common/constants';
import FollowModel from '../models/follow.model';

const getByUser = async (user) => {
  const follow = await FollowModel.aggregate([
    { $match: { user: mongoose.Types.ObjectId(user) } },
    {
      $project: {
        user: 1,
        follower: { $size: '$follower' },
        following: { $size: '$following' },
      },
    },
  ]);

  if (follow.length < 1) await create(user);

  return follow[0];
};

const getFollower = async (user, { q = '' }) => {
  const follower = FollowModel.findOne({ user }).populate('follower', 'firstName lastName avata').select('follower');
  if (!follower) throw new Error(ERROR.CanNotGetFollower);
  return follower;
};

const getFollowing = async (user, { q = '' }) => {
  const following = FollowModel.findOne({ user }).populate('following', 'firstName lastName avata').select('following');
  if (!following) throw new Error(ERROR.CanNotGetFollowing);
  return following;
};

const create = async (user) => {
  const newFollow = new FollowModel({
    follower: [],
    following: [],
    user,
  });
  const follow = await newFollow.save();
  if (!follow) throw new Error(ERROR.CanNotCreateFollow);
};

const deleteFollower = async (user, id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteFollower);
  const follow = await FollowModel.updateOne(
    { user },
    { $pull: { follower: id }, updatedAt: new Date() },
    { multi: true }
  );
  if (!follow) throw new Error(ERROR.CanNotDeleteFollower);
};

const deleteFollowing = async (user, id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteFollowing);
  const follow = await FollowModel.updateOne(
    { user },
    { $pull: { following: id }, updatedAt: new Date() },
    { multi: true }
  );
  if (!follow) throw new Error(ERROR.CanNotDeleteFollowing);

  await deleteFollower(user, id);
};

const updateFollower = async (user, id) => {
  if (!id) throw new Error(ERROR.CanNotUpdateFollower);
  const update = await FollowModel.updateOne({ user }, { $push: { follower: id }, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotUpdateFollower);
};

const updateFollowing = async (user, id) => {
  if (!id) throw new Error(ERROR.CanNotUpdateFollowing);
  const update = await FollowModel.updateOne({ user }, { $push: { following: id }, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotUpdateFollowing);

  await updateFollower(user, id);
};

export {
  getFollower,
  getFollowing,
  getByUser,
  create,
  deleteFollower,
  deleteFollowing,
  updateFollower,
  updateFollowing,
};
