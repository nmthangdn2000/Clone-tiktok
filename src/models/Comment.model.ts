import { CommonModel } from './Common.model';
import { UserModel } from './User.model';

export interface CommnetModel extends CommonModel {
  video: string;
  user: UserModel;
  comment: string;
}
