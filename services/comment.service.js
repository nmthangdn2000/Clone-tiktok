import { ERROR } from '../common/constants';
import CommentModel from '../models/comment.model';
import * as videoService from './video.service';
// const getAll = async () => {
//   const cart = await CommentModel.find();
//   if (!cart) throw new Error(ERROR.CanNotGetComment);
//   return cart;
// };

const getByIdVideo = async (video) => {
  const comment = await CommentModel.find({ video }).populate('user', 'firstName lastName avatar');
  if (!comment) throw new Error(ERROR.CanNotGetComment);
  return comment;
};

const create = async (data, user) => {
  if (!data.video || !data.comment || !user) throw new Error(ERROR.CanNotCreateComment);
  const newComment = new CommentModel({
    ...data,
    user,
  });
  const comment = await newComment.save();
  if (!comment) throw new Error(ERROR.CanNotCreateComment);
  const countComment = await CommentModel.find({ video: data.video }).countDocuments();
  await videoService.updateById(data.video, { comment: countComment });
};

const deleteById = async (id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteComment);
  const comment = await CommentModel.findByIdAndDelete(id);
  if (!comment) throw new Error(ERROR.CanNotDeleteComment);
};

const updateById = async (id, user, data) => {
  if (!id || !user) throw new Error(ERROR.CanNotUpdateComment);
  const update = await CommentModel.updateOne({ _id: id, user }, { ...data, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotUpdateComment);
};

export { getByIdVideo, create, deleteById, updateById };
