import * as userService from '../services/user.service';
import { RESPONSE } from '../common/constants';
import { responseSuccess, responseSuccessWithData, responseError } from './base.controller';

const filter = async (req, res) => {
  try {
    const { page, limit, sort, q } = req.query;
    const data = await userService.filter(q, page, limit, sort);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const getById = async (req, res) => {
  try {
    const data = await userService.getById(req.params.id);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const deleteById = async (req, res) => {
  try {
    await userService.deleteById(req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const updateById = async (req, res) => {
  try {
    await userService.updateById(req.user._id, req.body, req.file?.filename);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { filter, getById, deleteById, updateById };
