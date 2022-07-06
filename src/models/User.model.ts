import { CommonModel } from './Common.model';

enum TypeUser {
  ADMIN,
  CUSTOMER,
}

enum StatusUser {
  ACTIVE,
  BLOCK,
}

export interface UserModel extends CommonModel {
  name?: string;
  userName?: string;
  email?: string;
  avatar?: string;
  type?: TypeUser;
  status?: StatusUser;
  verify_email?: number;
  privacy?: {
    like: boolean;
  };
  token?: string;
  totalLike?: number;
  follower?: number;
  following?: number;
}
