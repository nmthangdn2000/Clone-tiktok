import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as notfificationController from '../controllers/notfification.controller';

const initRoute = () => {
  // route({ method: HttpMethod.GET, action: notfificationController.getAll });
  route({ method: HttpMethod.GET, url: '/:id', action: notfificationController.getByUser });
  route({ method: HttpMethod.POST, url: '', action: notfificationController.create });
  route({ method: HttpMethod.DELETE, url: '/:id', action: notfificationController.deleteById });
  route({ method: HttpMethod.PUT, url: '/:id', action: notfificationController.updateById });
};

export default addRoot(initRoute);
