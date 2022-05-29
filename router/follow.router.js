import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as followController from '../controllers/follow.controller';

const initRoute = () => {
  route({ method: HttpMethod.GET, action: followController.getByUser });
  route({ method: HttpMethod.GET, url: '/follower', action: followController.getFollower });
  route({ method: HttpMethod.GET, url: '/following', action: followController.getFollowing });
  route({ method: HttpMethod.DELETE, url: '/follower/:id', action: followController.unFollower });
  route({ method: HttpMethod.DELETE, url: '/following/:id', action: followController.unFollowing });
  route({ method: HttpMethod.PUT, url: '/follower/:id', action: followController.follower });
  route({ method: HttpMethod.PUT, url: '/following/:id', action: followController.following });
};

export default addRoot(initRoute);
