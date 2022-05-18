import * as categoryService from '../services/category.service';
import { responseError, responseSuccess, responseSuccessWithData } from './base.controller';

const getAll = async (req, res) => {
  try {
    const data = await categoryService.getAll();
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const getById = async (req, res) => {
  try {
    const data = await categoryService.getById(req.params.id);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const create = async (req, res) => {
  try {
    await categoryService.create(req.body.name);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const deleteById = async (req, res) => {
  try {
    await categoryService.deleteById(req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const updateById = async (req, res) => {
  try {
    await categoryService.updateById(req.params.id, req.body.name);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { getAll, getById, create, deleteById, updateById };
