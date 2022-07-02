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
  const follower = FollowModel.findOne({ user }).populate('follower', 'name userName avatar').select('follower');
  if (!follower) throw new Error(ERROR.CanNotGetFollower);
  return follower;
};

const getFollowing = async (user, { q = '' }) => {
  const following = FollowModel.findOne({ user }).populate('following', 'name userName avatar').select('following');
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

const unFollower = async (user, id) => {
  if (!id) throw new Error(ERROR.CanNotUnfollower);
  const follow = await FollowModel.updateOne(
    { user },
    { $pull: { follower: id }, updatedAt: new Date() },
    { multi: true }
  );
  if (!follow) throw new Error(ERROR.CanNotUnfollower);
};

const unFollowing = async (user, id) => {
  if (!id) throw new Error(ERROR.CanNotUnfollowing);
  const follow = await FollowModel.updateOne(
    { user },
    { $pull: { following: id }, updatedAt: new Date() },
    { multi: true }
  );

  if (follow.modifiedCount < 1) throw new Error(ERROR.CanNotUnfollowing);

  await unFollower(id, user);
};

const follower = async (user, id) => {
  if (!id) throw new Error(ERROR.CanNotFollower);
  const update = await FollowModel.updateOne({ user }, { $addToSet: { follower: id }, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotFollower);
};

const following = async (user, id) => {
  if (!id) throw new Error(ERROR.CanNotFollowing);
  const update = await FollowModel.updateOne({ user }, { $addToSet: { following: id }, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotFollowing);

  await follower(id, user);
};

export { getFollower, getFollowing, getByUser, create, unFollower, unFollowing, follower, following };
