import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as likeController from '../controllers/like.controller';

const initRoute = () => {
  route({ method: HttpMethod.GET, url: '', action: likeController.getByUser });
  route({ method: HttpMethod.GET, url: '/:id', action: likeController.getByIdUser, middelware: [] });
  route({ method: HttpMethod.GET, url: '/sum', action: likeController.getSumLikeByUser, middelware: [] });
  route({ method: HttpMethod.GET, url: '/:id/:type', action: likeController.like });
  // route({ method: HttpMethod.DELETE, url: '/:id', action: likeController.deleteByUser });
  // route({ method: HttpMethod.PUT, url: '/:id', action: likeController.updateByUser });
};

export default addRoot(initRoute);
