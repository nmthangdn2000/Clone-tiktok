'use strict';

import jwt from 'jsonwebtoken';
import appConfig from '../configs/appConfig';

const verifyUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, appConfig.KEY_SECRET_JWT);
    req.user = decoded;
    next();
    // res.send('ok');
  } catch (error) {
    return res.status(403).json({
      message: 'Authorization failed',
    });
  }
};

const verifyUserSocket = (socket, next) => {
  try {
    const token = socket.handshake.auth.token.split(' ')[1];
    const decoded = jwt.verify(token, appConfig.KEY_SECRET_JWT);
    socket.user = decoded;
    next();
    // res.send('ok');
  } catch (error) {
    console.log(error);
    next(new Error('Authorization failed'));
  }
};

export { verifyUser, verifyUserSocket };
