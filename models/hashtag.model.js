import * as BaseModel from './base.model';

// model name
const name = 'hashtag';

const model = {
  name: {
    type: String,
    unique: true,
    trim: true,
  },
  view: {
    type: Number,
    default: 0,
  },
};

// const option = { _id: false };

export default BaseModel.createModel({ name, model });
