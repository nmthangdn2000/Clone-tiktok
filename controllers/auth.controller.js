import * as authService from '../services/auth.service';
import { RESPONSE } from '../common/constants';
import { responseSuccess, responseSuccessWithData, responseError } from './base.controller';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await authService.login(email, password);
    responseSuccessWithData(res, data, RESPONSE.LOGIN_SUCCESS);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const register = async (req, res) => {
  try {
    await authService.register(req.body);
    responseSuccess(res, RESPONSE.REGISTER_SUCCESS);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const verifyEmail = async (req, res) => {
  try {
    await authService.verifyEmail(req.params.email, req.query.token);
    responseSuccess(res, RESPONSE.VERIFY_EMAIL_SUCCESS);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const sendVerifyEmail = async (req, res) => {
  try {
    await authService.sendVerifyEmail(req.params.email);
    responseSuccess(res, RESPONSE.SEND_VERIFY_EMAIL_SUCCESS);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const forgotPassword = async (req, res) => {
  try {
    await authService.forgotPassword(req.params.email);
    responseSuccess(res, RESPONSE.SEND_TOKEN_RESET_PASSWORD_SUCCESS);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const resetPassword = async (req, res) => {
  try {
    await authService.resetPassword(req.params.email, req.query.token);
    responseSuccess(res);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

const changePassword = async (req, res) => {
  try {
    const { email, password, token } = req.body;
    await authService.changePassword(email, password, token);
    responseSuccess(res, RESPONSE.CHANGE_PASSWORD_SUCCESS);
  } catch (error) {
    console.log(error);
    responseError(res, error.message);
  }
};

export { login, register, verifyEmail, sendVerifyEmail, forgotPassword, resetPassword, changePassword };
