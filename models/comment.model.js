import * as BaseModel from './base.model';
import mongoose from 'mongoose';
import { ERROR } from '../common/constants';

const Schema = mongoose.Schema;
// model name
const name = 'comments';

const model = {
  video: {
    type: Schema.Types.ObjectId,
    ref: 'videos',
    required: [true, ERROR.VideoIsRequired.toString()],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: [true, ERROR.UserIsRequired.toString()],
  },
  comment: String,
};

export default BaseModel.createModel({ name, model });
