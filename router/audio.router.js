import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as audioController from '../controllers/audio.controller';
import { uploadDiskStorage } from '../middlewares/upload.middleware';

const initRoute = () => {
  route({ method: HttpMethod.GET, action: audioController.getAll });
  route({ method: HttpMethod.GET, url: '/:id', action: audioController.getById });
  route({
    method: HttpMethod.POST,
    url: '',
    action: audioController.create,
    middelware: [
      uploadDiskStorage.fields([
        {
          name: 'audio',
          maxCount: 1,
        },
        {
          name: 'background',
          maxCount: 1,
        },
      ]),
    ],
  });
  route({ method: HttpMethod.DELETE, url: '/:id', action: audioController.deleteById });
  route({ method: HttpMethod.PUT, url: '/:id', action: audioController.updateById });
};

export default addRoot(initRoute);
