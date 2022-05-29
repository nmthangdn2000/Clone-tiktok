import * as BaseModel from './base.model';
import { ERROR, STATUS_ACCOUNT, TYPE_ACCOUNT } from '../common/constants';

// model name
const name = 'users';

const model = {
  name: {
    type: String,
    required: [true, ERROR.NameIsRequired.toString()],
    trim: true,
  },
  userName: {
    type: String,
    required: [true, ERROR.UserNameIsRequired.toString()],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, ERROR.EmailIsRequired.toString()],
    unique: true,
    trim: true,
  },
  avatar: {
    type: String,
    default: 'avatar-default.png',
  },
  bio: String,
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

const index = { name: 'text', userName: 'text' };

export default BaseModel.createModel({ name, model, index });
