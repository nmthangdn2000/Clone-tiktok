import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as userController from '../controllers/user.controller';

const initRoute = () => {
  route({ method: HttpMethod.GET, action: userController.filter });
  route({ method: HttpMethod.GET, url: '/:id', action: userController.getById });
  route({ method: HttpMethod.DELETE, url: '/:id', action: userController.deleteById });
  route({ method: HttpMethod.PUT, url: '/:id', action: userController.updateById });
};

export default addRoot(initRoute);
