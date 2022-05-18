import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as categoryController from '../controllers/category.controller';

const initRoute = () => {
  route({ method: HttpMethod.GET, action: categoryController.getAll });
  route({ method: HttpMethod.GET, url: '/:id', action: categoryController.getById });
  route({ method: HttpMethod.POST, url: '', action: categoryController.create });
  route({ method: HttpMethod.DELETE, url: '/:id', action: categoryController.deleteById });
  route({ method: HttpMethod.PUT, url: '/:id', action: categoryController.updateById });
};

export default addRoot(initRoute);
