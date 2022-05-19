import * as likeService from '../services/like.service';
import { responseSuccess, responseSuccessWithData, responseError } from './base.controller';

const getByUser = async (req, res) => {
  try {
    const data = await likeService.getByUser(req.user._id, req.params.id);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const deleteByUser = async (req, res) => {
  try {
    await likeService.deleteByUser(req.user._id, req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const updateByUser = async (req, res) => {
  try {
    await likeService.updateByUser(req.user._id, req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { getByUser, deleteByUser, updateByUser };
