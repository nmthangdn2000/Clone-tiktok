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

const unFollower = async (req, res) => {
  try {
    await followService.unFollower(req.user._id, req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const unFollowing = async (req, res) => {
  try {
    await followService.unFollowing(req.user._id, req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const follower = async (req, res) => {
  try {
    await followService.follower(req.user._id, req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const following = async (req, res) => {
  try {
    await followService.following(req.user._id, req.params.id);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { getByUser, getFollower, getFollowing, unFollower, unFollowing, follower, following };
