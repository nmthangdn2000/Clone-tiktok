import { ERROR } from '../common/constants';
import { textToSlug } from './base.service';
import CategoryModel from '../models/category.model';

const getAll = async () => {
  const category = await CategoryModel.find();
  if (!category) throw new Error(ERROR.CanNotGetCategory);
  return category;
};

const getById = async (id) => {
  const category = await CategoryModel.findById(id);
  if (!category) throw new Error(ERROR.CanNotGetCategory);
  return category;
};

const create = async (name) => {
  if (!name) throw new Error(ERROR.CanNotCreateCategory);
  const slug = textToSlug(name);
  const newCategory = new CategoryModel({
    name,
    slug,
  });
  const category = await newCategory.save();
  if (!category) throw new Error(ERROR.CanNotCreateCategory);
};

const deleteById = async (id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteCategory);
  const category = await CategoryModel.findByIdAndDelete(id);
  if (!category) throw new Error(ERROR.CanNotDeleteCategory);
};

const updateById = async (id, name) => {
  if (!id || !name) throw new Error(ERROR.CanNotUpdateCategory);
  const slug = textToSlug(name);
  const update = await CategoryModel.updateOne({ _id: id }, { name, slug, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotUpdateCategory);
};

export { getAll, getById, create, deleteById, updateById };
