import * as BaseModel from './base.model';

// model name
const name = 'audios';

const model = {
  name: String,
  background: String,
  author: String,
  videoCount: {
    type: Number,
    default: 0,
  },
  url: String,
};

export default BaseModel.createModel({ name, model });
