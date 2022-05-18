import { route, addRoot } from './base.router';
import { HttpMethod } from '../common/constants';
import * as authController from '../controllers/auth.controller';

const initRoute = () => {
  route({ method: HttpMethod.POST, url: '/login', action: authController.login, middelware: [] });
  route({ method: HttpMethod.POST, url: '/register', action: authController.register, middelware: [] });
  route({ method: HttpMethod.GET, url: '/verify/send/:email', action: authController.sendVerifyEmail, middelware: [] });
  route({ method: HttpMethod.GET, url: '/verify/:email', action: authController.verifyEmail, middelware: [] });
  route({
    method: HttpMethod.GET,
    url: '/password/forgot/:email',
    action: authController.forgotPassword,
    middelware: [],
  });
  route({
    method: HttpMethod.GET,
    url: '/password/reset/:email',
    action: authController.resetPassword,
    middelware: [],
  });
  route({ method: HttpMethod.PUT, url: '/password/change', action: authController.changePassword, middelware: [] });
  // route({ method: HttpMethod.POST, url: '/refresh-token', action: authController.register, middelware: [] });
};

export default addRoot(initRoute);
