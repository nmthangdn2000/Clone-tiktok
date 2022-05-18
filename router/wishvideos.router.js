import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as wishvideoController from '../controllers/wishvideos.controller';

const initRoute = () => {
  // route({ method: HttpMethod.GET, action: wishvideoController.getAll });
  route({ method: HttpMethod.GET, action: wishvideoController.getByUser });
  route({ method: HttpMethod.POST, url: '', action: wishvideoController.create });
  route({ method: HttpMethod.DELETE, url: '/:id', action: wishvideoController.deleteById });
  route({ method: HttpMethod.PUT, url: '/:id', action: wishvideoController.updateById });
};

export default addRoot(initRoute);
