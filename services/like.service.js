import { ERROR } from '../common/constants';
import LikeModel from '../models/like.model';

const getByUser = async (user, select = '') => {
  const like = await LikeModel.findOne({ user }).select(select);
  if (!like) await create(user);
  return like || [];
};

const create = async (user) => {
  const newLike = new LikeModel({
    videos: [],
    user,
  });
  const like = await newLike.save();
  if (!like) throw new Error(ERROR.CanNotCreateLike);
};

const deleteByUser = async (user, id) => {
  if (!id || !user) throw new Error(ERROR.CanNotDeleteLike);
  const like = await FollowModel.updateOne(
    { user },
    { $pull: { follower: id }, updatedAt: new Date() },
    { multi: true }
  );
  if (!like) throw new Error(ERROR.CanNotDeleteLike);
};

const updateByUser = async (user, id) => {
  if (!id || !user) throw new Error(ERROR.CanNotUpdateLike);
  const update = await FollowModel.updateOne({ user }, { $push: { videos: id }, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotUpdateLike);
};

export { getByUser, deleteByUser, updateByUser };
