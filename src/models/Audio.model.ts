import { CommonModel } from './Common.model';

export interface AudioModel extends CommonModel {
  name: string;
  background: string;
  author: string;
  videoCount: number;
  url: string;
}
