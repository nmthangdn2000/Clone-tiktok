import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as hashtagController from '../controllers/hashtag.controller';

const initRoute = () => {
  // route({ method: HttpMethod.GET, action: hashtagController.getAll });
  route({ method: HttpMethod.GET, action: hashtagController.getByQuery, middelware: [] });
  route({ method: HttpMethod.POST, url: '', action: hashtagController.create });
  route({ method: HttpMethod.DELETE, url: '/:id', action: hashtagController.deleteByName });
  // route({ method: HttpMethod.PUT, url: '/:id', action: hashtagController.updateById });
};

export default addRoot(initRoute);
