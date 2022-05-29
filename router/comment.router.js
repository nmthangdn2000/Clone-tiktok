import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as commentController from '../controllers/comment.controller';

const initRoute = () => {
  // route({ method: HttpMethod.GET, action: commentController.getAll });
  route({ method: HttpMethod.GET, url: '/:id', action: commentController.getByIdVideo, middelware: [] });
  route({ method: HttpMethod.POST, url: '', action: commentController.create });
  route({ method: HttpMethod.DELETE, url: '/:id', action: commentController.deleteById });
  route({ method: HttpMethod.PUT, url: '/:id', action: commentController.updateById });
};

export default addRoot(initRoute);
