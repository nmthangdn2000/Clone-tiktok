import { ERROR, LIMIT, PAGE } from '../common/constants';
import NotificationModel from '../models/notification.model';
import * as videoService from './video.service';
// const getAll = async () => {
//   const cart = await NotificationModel.find();
//   if (!cart) throw new Error(ERROR.CanNotGetNotification);
//   return cart;
// };

const getByUser = async (user, { page = PAGE, limit = LIMIT }) => {
  const notification = await NotificationModel.find({ user })
    .populate('user', 'firstName lastName avatar')
    .skip(page * limit - limit)
    .limit(Number(limit));
  if (!notification) throw new Error(ERROR.CanNotGetNotification);
  return {
    data: notification,
    currentPage: Number(page),
    totalPage: pagination(total, limit),
  };
};

const create = async ({ sender, receiver, type, typeID, message }) => {
  if (!sender || !receiver || !typeID || !type) throw new Error(ERROR.CanNotCreateNotification);
  const newNotification = new NotificationModel({
    sender,
    receiver,
    type,
    typeID,
    message,
  });
  const notification = await newNotification.save();
  if (!notification) throw new Error(ERROR.CanNotCreateNotification);
};

const deleteById = async (id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteNotification);
  const notification = await NotificationModel.findByIdAndDelete(id);
  if (!notification) throw new Error(ERROR.CanNotDeleteNotification);
};

const updateById = async (id, data) => {
  if (!id) throw new Error(ERROR.CanNotUpdateNotification);
  const update = await NotificationModel.updateOne({ _id: id }, { ...data, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotUpdateNotification);
};

export { getByUser, create, deleteById, updateById };
