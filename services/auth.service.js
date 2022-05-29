import User from '../models/user.model';
import { ERROR } from '../common/constants';
import * as PasswordHash from '../common/hashPassword';
import jwt from 'jsonwebtoken';
import appConfig from '../configs/appConfig';
import * as mailer from '../helpers/mailer';
import { textToSlug } from './base.service';
import * as likeService from './like.service';
import * as followService from './follow.service';

const login = async (email, password) => {
  const query = {
    email,
    password: PasswordHash.sha512(password),
  };
  const user = await User.findOne(query).select('-password').lean();
  if (!user) throw new Error(ERROR.AccountDoesNotExist);
  const { _id, name, avata, userName, ...data } = user;

  const getSumLike = likeService.getSumLikeByUser(_id);
  const getFollow = followService.getByUser(_id);
  const [totalLike, follow] = await Promise.all([getSumLike, getFollow]);
  const follower = follow ? follow.follower : 0;
  const following = follow ? follow.following : 0;

  const token = endCodeToken({ _id, name, avata, userName });
  return { ...user, token, totalLike, follower, following };
};

const register = async (data) => {
  let { password, ...objectUser } = data;
  password = PasswordHash.sha512(password);

  const userName = `${textToSlug(objectUser.name.split(' ')[0], false)}${makeid(3)}${makeid(3)}`;
  // const checkUserName = await User.findOne({ userName });
  // if (checkUserName) userName = `${objectUser.firstName}_${makeid()}`;

  const newUser = new User({
    ...objectUser,
    userName,
    password,
  });
  const user = await newUser.save();
  if (!user) throw new Error(ERROR.CanNotCreateUser);
  const { name, email } = data;
  const token = PasswordHash.sha512(tokenVerifyEmail(name, email, user.updatedAt));
  mailer.sendMail(email, subject, htmlVerifyEmail(name, email, token));
};

const verifyEmail = async (email, tokenUrl) => {
  const user = await User.findOne({ email }).lean();
  const { _id, name, updatedAt } = user;
  const token = PasswordHash.sha512(tokenVerifyEmail(name, email, updatedAt));
  if (tokenUrl != token) throw new Error(ERROR.CantNotVerifyEmail);
  const update = await User.updateOne({ _id }, { verify_email: new Date(), updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CantNotVerifyEmail);
};

const sendVerifyEmail = async (email) => {
  if (!email) throw Error(ERROR.CantNotSendVerifyEmail);
  const user = await User.findOne({ email }).lean();
  if (!user) throw Error(ERROR.CantNotSendVerifyEmail);
  const { name, updatedAt } = user;
  const token = PasswordHash.sha512(tokenVerifyEmail(name, email, updatedAt));
  mailer.sendMail(email, subject, htmlVerifyEmail(name, email, token));
};

const forgotPassword = async (email) => {
  if (!email) throw Error(ERROR.CantNotResetPassword);
  const user = await User.findOne({ email }).lean();
  if (!user) throw Error(ERROR.CantNotResetPassword);
  const { name, updatedAt } = user;
  const token = PasswordHash.sha512(tokenResetPassword(name, email, updatedAt));
  mailer.sendMail(email, subject, htmlResetPassword(name, email, token));
};

const resetPassword = async (email, tokenUrl) => {
  const user = await User.findOne({ email }).lean();
  const { firstName, lastName, updatedAt } = user;
  const token = PasswordHash.sha512(tokenResetPassword(name, email, updatedAt));
  if (tokenUrl != token) throw new Error(ERROR.CantNotResetPassword);
};

const changePassword = async (email, password, tokenUrl) => {
  if (!email || !password || !tokenUrl) throw Error(ERROR.CantNotUpdatePassword);

  const user = await User.findOne({ email }).lean();
  if (!user) throw Error(ERROR.CantNotUpdatePassword);

  const { firstName, lastName, updatedAt } = user;
  const token = PasswordHash.sha512(tokenResetPassword(name, email, updatedAt));
  if (tokenUrl != token) throw new Error(ERROR.CantNotUpdatePassword);

  password = PasswordHash.sha512(password);
  const update = await User.updateOne({ email }, { password, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CantNotUpdatePassword);
};

export { login, register, verifyEmail, sendVerifyEmail, forgotPassword, resetPassword, changePassword };

const subject = 'Verify email';

const tokenVerifyEmail = (name, email, password) => `${name}-${email}-${password}-verifyemail`;
const tokenResetPassword = (name, email, password) => `${name}-${email}-${password}-resetpassword`;

const endCodeToken = (data) => {
  return jwt.sign(data, appConfig.KEY_SECRET_JWT, { expiresIn: '30d' });
};

const htmlVerifyEmail = (name, email, token) => `
<p>Xin chào <strong>${name}</strong></p>
<p>Cảm ơn bạn đã đăng ký tài khoảng tại website khoi.com của chúng tôi</p>
<p>
  Để có trải nghiệm tốt bạn vui lòng click vào button dưới đây để xác thực email của
  bạn
</p>
<a style="
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 50px;
  " href="http://localhost:3000/api/verify/${email}?token=${token}">
  Xác thực email
</a>
<div style="margin-top: 20px">
  <strong style="font-size: 50px"> Wellcome to khoi.com </strong>
</div>
`;

const htmlResetPassword = (name, email, token) => `
<p>Xin chào <strong>${name}</strong></p>
<p>Để đặt lại mật khẩu của bạn tại website khoi.com vui lòng click vào button dưới đây:</p>
<a style="
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 50px;
  " href="http://localhost:3000/api/password/reset/${email}?token=${token}">
  Đặt lại mật khẩu
</a>
<div style="margin-top: 20px">
  <strong style="font-size: 50px"> Wellcome to khoi.com </strong>
</div>
`;

function makeid(length = 5) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_^';

  for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
