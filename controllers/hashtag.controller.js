import * as hashtagService from '../services/hashtag.service';
import { responseError, responseSuccess, responseSuccessWithData } from './base.controller';

const getByQuery = async (req, res) => {
  try {
    const data = await hashtagService.getByQuery(req.query.q);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const create = async (req, res) => {
  try {
    await hashtagService.create(req.body.name);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const deleteByName = async (req, res) => {
  try {
    await hashtagService.deleteByName(req.params.name);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { getByQuery, create, deleteByName };
