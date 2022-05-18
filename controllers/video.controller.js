import * as videoService from '../services/video.service';
import { responseError, responseSuccess, responseSuccessWithData } from './base.controller';

const getAll = async (req, res) => {
  try {
    const data = await videoService.getAll(req.query);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const getById = async (req, res) => {
  try {
    const data = await videoService.getById(req.params.id);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const create = async (req, res) => {
  try {
    await videoService.create(req.body, req.user._id, req.file.filename);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const deleteById = async (req, res) => {
  try {
    await videoService.deleteById(req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const updateById = async (req, res) => {
  try {
    await videoService.updateById(req.params.id, req.body, req.file.filename);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { getAll, getById, create, deleteById, updateById };
