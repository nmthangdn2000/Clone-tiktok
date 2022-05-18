import { ERROR, RESPONSE } from '../common/constants';

const responseSuccess = (res, message = RESPONSE.SUCCESS) => {
  return res.status(200).json({
    success: true,
    message,
  });
};

const responseSuccessWithData = (res, data, message = RESPONSE.SUCCESS) => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

const responseError = (res, errorCode = ERROR.InternalServerError, data = {}) => {
  let code = Number(errorCode);
  let message = '';
  if (Number.isInteger(code)) message = getErrorMessage(code);
  else {
    message = errorCode;
  }
  return res.status(200).json({
    success: false,
    message,
    errorCode: code,
  });
};

export { responseSuccess, responseSuccessWithData, responseError };

function getErrorMessage(code) {
  const message = getKeyByValue(ERROR, code);
  return message ? message.replace(/([A-Z])/g, ' $1').trim() : `${code}`;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
