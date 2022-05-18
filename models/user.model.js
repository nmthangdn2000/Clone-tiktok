import * as BaseModel from './base.model';
import { ERROR, STATUS_ACCOUNT, TYPE_ACCOUNT } from '../common/constants';

// model name
const name = 'users';

const model = {
  firstName: {
    type: String,
    required: [true, ERROR.FirstNameIsRequired.toString()],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, ERROR.LastNameIsRequired.toString()],
    trim: true,
  },
  email: {
    type: String,
    required: [true, ERROR.EmailIsRequired.toString()],
    unique: true,
    trim: true,
  },
  avata: {
    type: String,
    default: 'avata-default.png',
  },
  password: {
    type: String,
    required: [true, ERROR.PasswordIsRequired.toString()],
    select: false,
  },
  type: {
    type: Number,
    enum: TYPE_ACCOUNT,
    default: TYPE_ACCOUNT.CUSTOMER,
  },
  status: {
    type: Number,
    enum: STATUS_ACCOUNT,
    default: STATUS_ACCOUNT.ACTIVE,
  },
  verify_email: {
    type: Number,
    default: 0,
  },
};

const index = { firstName: 'text', lastName: 'text', email: 'text' };

export default BaseModel.createModel({ name, model, index });
