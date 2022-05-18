import { ERROR } from '../common/constants';
import WishvideosModel from '../models/wishvideos.model';

// const getAll = async () => {
//   const wishlist = await WishvideosModel.find();
//   if (!wishlist) throw new Error(ERROR.CanNotGetWishvideos);
//   return wishlist;
// };

const getByUser = async (user) => {
  const wishlist = await WishvideosModel.find({ user }).populate({
    path: 'video',
    model: 'videos',
    select: '-createdAt -updatedAt',
    populate: {
      path: 'categories',
      model: 'categories',
      select: '-createdAt -updatedAt',
    },
  });

  if (!wishlist) throw new Error(ERROR.CanNotGetWishvideos);
  return wishlist;
};

const create = async (data, user) => {
  if (!data.video || !user) throw new Error(ERROR.CanNotCreateWishvideos);
  const newWishlist = new WishvideosModel({
    ...data,
    user,
  });
  const wishlist = await newWishlist.save();
  if (!wishlist) throw new Error(ERROR.CanNotCreateWishvideos);
};

const deleteById = async (id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteWishvideos);
  const wishlist = await WishvideosModel.findByIdAndDelete(id);
  if (!wishlist) throw new Error(ERROR.CanNotDeleteWishvideos);
};

const updateById = async (id, data) => {
  if (!id) throw new Error(ERROR.CanNotUpdateWishvideos);
  const update = await WishvideosModel.updateOne({ _id: id }, { ...data, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotUpdateWishvideos);
};

export { getByUser, create, deleteById, updateById };
