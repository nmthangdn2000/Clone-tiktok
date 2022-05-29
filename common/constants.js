'use strict';

const LIMIT = 10;
const PAGE = 1;

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const RESPONSE = {
  SUCCESS: 'Success',
  LOGIN_SUCCESS: 'Login Success',
  REGISTER_SUCCESS: 'Register Success',
  VERIFY_EMAIL_SUCCESS: 'Verify email success',
  SEND_VERIFY_EMAIL_SUCCESS: 'Send verify email success',
  SEND_TOKEN_RESET_PASSWORD_SUCCESS: 'Send token reset password success',
  CHANGE_PASSWORD_SUCCESS: 'change password success',
};

const ERROR = {
  Default: 100,
  InternalServerError: 101,
  NoData: 102,
  AccountDoesNotExist: 103,
  PasswordIsNotCorrect: 104,
  //user 111 - 130
  CanNotGetUser: 111,
  CanNotCreateUser: 112,
  CanNotDeleteUser: 113,
  CanNotUpdateUser: 114,
  EmailIsExist: 115,
  UserIsRequired: 116,
  EmailIsRequired: 117,
  PasswordIsRequired: 118,
  CantNotVerifyEmail: 119,
  CantNotSendVerifyEmail: 120,
  CantNotResetPassword: 121,
  CantNotUpdatePassword: 122,
  NameIsRequired: 123,
  UserNameIsRequired: 124,
  // Videos 131
  CanNotGetVideo: 131,
  CanNotCreateVideo: 132,
  CanNotDeleteVideo: 133,
  CanNotUpdateVideo: 134,
  UrlVideoIsRequired: 135,
  VideoIsRequired: 136,
  // Categories 141
  NameCategorieIsRequired: 141,
  SlugCategorieIsRequired: 142,
  CanNotGetCategory: 143,
  CanNotCreateCategory: 144,
  CanNotDeleteCategory: 145,
  CanNotUpdateCategory: 146,
  CategorieIsRequired: 147,
  // Wishvideos 151
  CanNotGetWishvideos: 151,
  CanNotCreateWishvideos: 152,
  CanNotDeleteWishvideos: 153,
  CanNotUpdateWishvideos: 154,
  // Comment 161
  CanNotGetComment: 161,
  CanNotCreateComment: 162,
  CanNotDeleteComment: 163,
  CanNotUpdateComment: 164,
  // Follow 171
  CanNotGetFollow: 171,
  CanNotGetFollower: 172,
  CanNotGetFollowing: 173,
  CanNotCreateFollow: 174,
  CanNotDeleteFollow: 175,
  CanNotUpdateFollow: 176,
  CanNotAddFollower: 177,
  CanNotAddFollowing: 178,
  CanNotDeleteFollower: 179,
  CanNotDeleteFollowing: 180,
  CanNotUpdateFollower: 181,
  CanNotUpdateFollowing: 182,
  // Like 191
  CanNotGetLikeVideo: 191,
  CanNotCreateLike: 192,
  CanNotDeleteLike: 193,
  CanNotUpdateLike: 194,
  CanNotGetSumLike: 195,
  CanNotLike: 196,
  CanNotDislike: 197,
  // Notification 201
  CanNotGetNotification: 201,
  CanNotCreateNotification: 202,
  CanNotDeleteNotification: 203,
  CanNotUpdateNotification: 204,
  // Audio 211
  CanNotGetAudio: 211,
  CanNotCreateAudio: 212,
  CanNotDeleteAudio: 213,
  CanNotUpdateAudio: 214,
  AudioIsRequired: 116,
};

const TYPE_ACCOUNT = {
  ADMIN: 0,
  CUSTOMER: 1,
};

const STATUS_ACCOUNT = {
  ACTIVE: 0,
  BLOCK: 1,
};

const STATUS_ORDER = {
  PENDDING: 0,
  APPROVED: 1,
};

const REF_MODEL = {
  VIDEO: 'videos',
  LIKEL: 'likes',
  FOLLOW: 'follows',
  COMMENT: 'comments',
};

export { LIMIT, PAGE, HttpMethod, ERROR, RESPONSE, TYPE_ACCOUNT, STATUS_ACCOUNT, STATUS_ORDER, REF_MODEL };
