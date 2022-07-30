import * as BaseModel from './base.model';
import mongoose from 'mongoose';
import { CONTEN_NOTIFICATION, ERROR, REF_MODEL } from '../common/constants';

const Schema = mongoose.Schema;
// model name
const name = 'notifications';

const model = {
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: [true, ERROR.UserIsRequired.toString()],
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: [true, ERROR.UserIsRequired.toString()],
  },
  type: {
    type: String,
    enum: REF_MODEL,
  },
  typeID: {
    type: Schema.Types.ObjectId,
    refPath: 'type',
  },
  content: {
    type: Number,
    enum: CONTEN_NOTIFICATION,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
};

export default BaseModel.createModel({ name, model });
