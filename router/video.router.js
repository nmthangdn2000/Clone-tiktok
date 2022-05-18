import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as productController from '../controllers/video.controller';
import { uploadDiskStorage } from '../middlewares/upload.middleware';

const initRoute = () => {
  route({ method: HttpMethod.GET, action: productController.getAll });
  route({ method: HttpMethod.GET, url: '/:id', action: productController.getById });
  route({
    method: HttpMethod.POST,
    url: '',
    action: productController.create,
    middelware: [uploadDiskStorage.single('video')],
  });
  route({ method: HttpMethod.DELETE, url: '/:id', action: productController.deleteById });
  route({
    method: HttpMethod.PUT,
    url: '/:id',
    action: productController.updateById,
    middelware: [uploadDiskStorage.array('images', 10)],
  });
};

export default addRoot(initRoute);
