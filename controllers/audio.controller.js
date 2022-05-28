import * as audioService from '../services/audio.service';
import { responseError, responseSuccess, responseSuccessWithData } from './base.controller';

const getAll = async (req, res) => {
  try {
    const data = await audioService.getAll(req.query);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const getById = async (req, res) => {
  try {
    const data = await audioService.getById(req.params.id);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const create = async (req, res) => {
  try {
    const background = `images/${req.files.background[0].filename}`;
    const url = `audios/${req.files.audio[0].filename}`;
    const { name, author } = req.body;
    const data = {
      background,
      url,
      name,
      author,
    };
    await audioService.create(data);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const deleteById = async (req, res) => {
  try {
    await audioService.deleteById(req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const updateById = async (req, res) => {
  try {
    await audioService.updateById(req.params.id, req.body);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { getAll, getById, create, deleteById, updateById };
