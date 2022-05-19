import * as notificationService from '../services/notification.service';
import { responseError, responseSuccess, responseSuccessWithData } from './base.controller';

// const getAll = async (req, res) => {
//   try {
//     const data = await notificationService.getAll();
//     responseSuccessWithData(res, data);
//   } catch (error) {
//     console.log(error);
//     responseError(res, error.message);
//   }
// };

const getByUser = async (req, res) => {
  try {
    const data = await notificationService.getByUser(req.user._id, req.query);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const create = async (req, res) => {
  // try {
  //   await notificationService.create(req.body, req.user._id);
  //   responseSuccess(res);
  // } catch (error) {
  //   console.log(error);
  //   responseError(res, error.message);
  // }
};

const deleteById = async (req, res) => {
  try {
    await notificationService.deleteById(req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const updateById = async (req, res) => {
  try {
    await notificationService.updateById(req.params.id, req.body);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { getByUser, create, deleteById, updateById };
