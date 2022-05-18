'use strict';

import mongoose from 'mongoose';
import appConfig from '../configs/appConfig';

const connect = async () => {
  mongoose.connect(appConfig.db.uri);
  const db = mongoose.connection;
  db.on('error', (err) => console.log('mongoose error: ', err)).once('open', () => {
    console.log('DB Connect sucesses');
  });
};

export { connect };
