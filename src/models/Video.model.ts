import { AudioModel } from './Audio.model';
import { CommonModel } from './Common.model';
import { UserModel } from './User.model';

export interface VideoModel extends CommonModel {
  caption: string;
  captionSlug: string;
  background: string;
  url: string;
  author: UserModel;
  audio: AudioModel;
  like: number;
  comment: number;
  privacy: boolean;
}
