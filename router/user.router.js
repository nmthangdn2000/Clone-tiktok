import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as userController from '../controllers/user.controller';
import { uploadDiskStorage } from '../middlewares/upload.middleware';

const initRoute = () => {
  route({ method: HttpMethod.GET, action: userController.filter });
  route({ method: HttpMethod.GET, url: '/:id', action: userController.getById });
  route({ method: HttpMethod.DELETE, url: '/:id', action: userController.deleteById });
  route({
    method: HttpMethod.PUT,
    url: '',
    action: userController.updateById,
    middelware: [uploadDiskStorage.single('avatar')],
  });
};

export default addRoot(initRoute);
