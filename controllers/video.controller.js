import * as videoService from '../services/video.service';
import { responseError, responseSuccess, responseSuccessWithData } from './base.controller';
import { deleteFile } from '../services/base.service';

const getAll = async (req, res) => {
  try {
    const data = await videoService.getAll(req.query);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const getByUser = async (req, res) => {
  try {
    const data = await videoService.getByUser(req.user._id, req.query);
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
  console.log(req.file);
  try {
    await videoService.create(req.body, req.user, req.file.filename);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    if (req.file && req.file.filename) deleteFile(`videos/${req.file.filename}`);
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

export { getByUser, getAll, getById, create, deleteById, updateById };
