import { ERROR } from '../common/constants';
import HashTagModel from '../models/hashtag.model';

const getByQuery = async (q) => {
  const query = q ? { name: { $regex: new RegExp(q), $options: 'si' } } : {};
  const hashtag = await HashTagModel.find(query).select('-createdAt -updatedAt');
  if (!hashtag) throw new Error(ERROR.CanNotGetHashtag);
  return hashtag;
};

const create = async (name) => {
  if (!name) throw new Error(ERROR.CanNotCreateHashtag);
  const isHashtag = await HashTagModel.findOne({ name }).lean();
  if (isHashtag) return;
  const newHashtag = new HashTagModel({
    name,
  });
  const hashtag = await newHashtag.save();
  if (!hashtag) throw new Error(ERROR.CanNotCreateHashtag);
};

const deleteByName = async (name) => {
  if (!name) throw new Error(ERROR.CanNotDeleteHashtag);
  const hashtag = await HashTagModel.findOneAndDelete({ name });
  if (!hashtag) throw new Error(ERROR.CanNotDeleteHashtag);
};

export { getByQuery, create, deleteByName };
