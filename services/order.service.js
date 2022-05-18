// import { ERROR, LIMIT, PAGE } from '../common/constants';
// import OrderModel from '../models/order.model';
// import { pagination } from './base.service';

// const getAll = async ({ q = '', page = PAGE, limit = LIMIT, sort }) => {
//   const query = q
//     ? {
//         $or: [
//           {
//             product: q,
//           },
//           {
//             user: q,
//           },
//         ],
//       }
//     : {};
//   const count = OrderModel.find(query).countDocuments();
//   // chưa làm sort
//   const getOrder = OrderModel.find(query)
//     .populate('user', '-createdAt -updatedAt')
//     .populate('product', '-createdAt -updatedAt')
//     .skip(page * limit - limit)
//     .limit(Number(limit));
//   const [total, orders] = await Promise.all([count, getOrder]);
//   if (!orders) throw new Error(ERROR.CanNotGetUser);
//   return {
//     data: orders,
//     currentPage: Number(page),
//     totalPage: pagination(total, limit),
//   };
// };

// const getById = async (id) => {
//   const cart = await OrderModel.findById(id)
//     .populate('user', '-createdAt -updatedAt')
//     .populate('product', '-createdAt -updatedAt');
//   if (!cart) throw new Error(ERROR.CanNotGetOrder);
//   return cart;
// };

// const getByUser = async (user, { q = '', page = PAGE, limit = LIMIT, sort }) => {
//   console.log(user);
//   const count = OrderModel.find({ user }).countDocuments();
//   const getOrder = OrderModel.find({ user })
//     .populate('user', '-createdAt -updatedAt')
//     .populate('product', '-createdAt -updatedAt')
//     .skip(page * limit - limit)
//     .limit(Number(limit));
//   const [total, orders] = await Promise.all([count, getOrder]);
//   if (!orders) throw new Error(ERROR.CanNotGetOrder);
//   return {
//     data: orders,
//     currentPage: Number(page),
//     totalPage: pagination(total, limit),
//   };
// };

// const create = async (data, user) => {
//   if (!data.product || !user) throw new Error(ERROR.CanNotCreateOrder);
//   const newCart = new OrderModel({
//     ...data,
//     user,
//   });
//   const cart = await newCart.save();
//   if (!cart) throw new Error(ERROR.CanNotCreateOrder);
// };

// const deleteById = async (id) => {
//   if (!id) throw new Error(ERROR.CanNotDeleteOrder);
//   const cart = await OrderModel.findByIdAndDelete(id);
//   if (!cart) throw new Error(ERROR.CanNotDeleteOrder);
// };

// const updateById = async (id, status) => {
//   console.log(status);
//   if (!id || !status) throw new Error(ERROR.CanNotUpdateOrder);
//   const update = await OrderModel.updateOne({ _id: id }, { ...status, updatedAt: new Date() });
//   if (update.modifiedCount < 1) throw new Error(ERROR.CanNotUpdateOrder);
// };

// export { getAll, getById, getByUser, create, deleteById, updateById };
