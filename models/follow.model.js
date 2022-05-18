import * as BaseModel from './base.model';
import mongoose from 'mongoose';
import { ERROR } from '../common/constants';

const Schema = mongoose.Schema;
// model name
const name = 'follow';

const model = {
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: [true, ERROR.UserIsRequired.toString()],
  },
  follower: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: [true, ERROR.UserIsRequired.toString()],
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: [true, ERROR.UserIsRequired.toString()],
    },
  ],
};

export default BaseModel.createModel({ name, model });
