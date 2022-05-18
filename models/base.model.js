'use strict';

import mongoose from 'mongoose';
import errorMessageMongoose from '../common/errorMessage';

const Schema = mongoose.Schema;

const createSchema = (name, model, index) => {
  const commonFields = {
    createdAt: {
      type: Number,
      default: new Date(),
    },
    updatedAt: {
      type: Number,
      default: new Date(),
    },
  };

  const myModel = { ...model, ...commonFields };
  const schema = new Schema(myModel, {
    collection: name,
    versionKey: false,
  });

  if (index) {
    schema.index({ ...index, _id: 'text' });
  }

  return schema;
};

const validator = (schema) => {
  schema.post('save', (error, doc, next) => {
    console.log(error);
    if (error.name === 'ValidationError') {
      const message = Object.values(error.errors).map((val) => val.message)[0];
      const kind = Object.values(error.errors).map((val) => val.kind)[0];
      // if (kind === 'required') return next(new Error(message)); //error_message
      return next(new Error(message));
    }
    if (error.name === 'MongoServerError' && error.code === 11000) {
      let key = '';
      for (var nameKey in error.keyValue) {
        key = nameKey;
      }
      const code = errorMessageMongoose.getErrorMessage(key);
      return next(new Error(error.message));
    } else {
      return next();
    }
  });
};

const createModel = ({ name = '', model = {}, index = null }) => {
  const schema = createSchema(name, model, index);
  validator(schema);
  const myModel = mongoose.model(name, schema);

  myModel.on('index', function (err) {
    if (err) {
      console.error('User index error: %s', err.message);
    }
  });

  return myModel;
};

export { createModel };
