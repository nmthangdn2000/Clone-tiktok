'use strict';

import { ERROR } from '../common/constants';

class ErrorMessageMongoose {
  getErrorMessage = (key) => {
    switch (key) {
      case 'phone':
        return ERROR.PhoneIsExist;
      case 'name':
        return ERROR.UserIsRequired;
      default:
        break;
    }
  };
}

export default new ErrorMessageMongoose();
