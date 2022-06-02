import * as likeService from '../services/like.service';
import { responseSuccess, responseSuccessWithData, responseError } from './base.controller';
import { ERROR } from '../common/constants';

const getByUser = async (req, res) => {
  try {
    console.log('getByUser');
    const data = await likeService.getByUser({ user: req.user._id });
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const getByIdUser = async (req, res) => {
  try {
    console.log('getByIdUser');
    const data = await likeService.getByUser({ id: req.params.id });
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const like = async (req, res) => {
  try {
    const { id, type } = req.params;
    console.log(type);
    if (type != 'like' && type != 'dislike') throw new Error(ERROR.CanNotUpdateLike);
    if (type === 'like') await likeService.like(req.user._id, id);
    else await likeService.dislike(req.user._id, id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};
// const deleteByUser = async (req, res) => {
//   try {
//     await likeService.deleteByUser(req.user._id, req.params.id);
//     responseSuccess(res);
//   } catch (error) {
//     console.log(error);
//     responseError(res, error.message);
//   }
// };

// const updateByUser = async (req, res) => {
//   try {
//     await likeService.updateByUser(req.user._id, req.params.id);
//     responseSuccess(res);
//   } catch (error) {
//     console.log(error);
//     responseError(res, error.message);
//   }
// };

const getSumLikeByUser = async (req, res) => {
  try {
    const data = await likeService.getSumLikeByUser(req.user._id);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { getSumLikeByUser, getByUser, getByIdUser, like };
