import * as BaseModel from './base.model';
import mongoose from 'mongoose';
import { ERROR } from '../common/constants';

const Schema = mongoose.Schema;
// model name
const name = 'videos';

const model = {
  caption: String,
  captionSlug: String,
  background: String,
  url: {
    type: String,
    require: [true, ERROR.UrlVideoIsRequired.toString()],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: [true, ERROR.UserIsRequired.toString()],
  },
  audio: {
    type: Schema.Types.ObjectId,
    ref: 'audios',
    // required: [true, ERROR.UserIsRequired.toString()],
  },
  // categories: [
  //   {
  //     // _id: false,
  //     type: Schema.Types.ObjectId,
  //     ref: 'categories',
  //     required: [true, ERROR.CategorieIsRequired.toString()],
  //   },
  // ],
  like: {
    type: Number,
    default: 0,
  },
  comment: {
    type: Number,
    default: 0,
  },
  privacy: {
    type: Boolean,
    default: false,
  },
};

export default BaseModel.createModel({ name, model });
