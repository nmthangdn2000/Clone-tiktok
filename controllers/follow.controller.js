import * as followService from '../services/follow.service';
import { responseError, responseSuccess, responseSuccessWithData } from './base.controller';

const getByUser = async (req, res) => {
  try {
    const data = await followService.getByUser(req.user._id, req.query);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const getFollower = async (req, res) => {
  try {
    const data = await followService.getFollower(req.user._id, req.query);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const getFollowing = async (req, res) => {
  try {
    const data = await followService.getFollowing(req.user._id, req.query);
    responseSuccessWithData(res, data);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const deleteFollower = async (req, res) => {
  try {
    await followService.deleteFollower(req.user._id, req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const deleteFollowing = async (req, res) => {
  try {
    await followService.deleteFollowing(req.user._id, req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const updateFollower = async (req, res) => {
  try {
    await followService.updateFollower(req.user._id, req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const updateFollowing = async (req, res) => {
  try {
    await followService.updateFollowing(req.user._id, req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { getByUser, getFollower, getFollowing, deleteFollower, deleteFollowing, updateFollower, updateFollowing };
