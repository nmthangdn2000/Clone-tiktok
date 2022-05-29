import * as BaseModel from './base.model';
import mongoose from 'mongoose';
import { ERROR } from '../common/constants';

const Schema = mongoose.Schema;
// model name
const name = 'likes';

const model = {
  video: {
    type: Schema.Types.ObjectId,
    ref: 'videos',
    required: [true, ERROR.UserIsRequired.toString()],
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: [true, ERROR.VideoIsRequired.toString()],
    },
  ],
};

export default BaseModel.createModel({ name, model });
