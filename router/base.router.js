import { HttpMethod } from '../common/constants';
import { verifyUser } from '../middlewares/authentic.middleware';
import express from 'express';

let router = express.Router();
let routes = [];

const route = ({ method, url = '', action, middelware = [verifyUser] }) => {
  if (middelware.length > 0 && middelware[0] != verifyUser) middelware = [verifyUser, ...middelware];

  routes.push({ method, url, action, middelware });
};

const getRouter = () => {
  routes = routes.sort((r1, r2) => r2.url.localeCompare(r1.url));
  routes.forEach((route) => {
    addRoute(route);
  });
  routes = [];
  return router;
};

const addRoot = (initRoute) => {
  router = express.Router();
  initRoute();
  return getRouter();
};

const addRoute = (route) => {
  switch (route.method) {
    case HttpMethod.POST:
      router.post(route.url, route.middelware, route.action);
      break;
    case HttpMethod.PUT:
      router.put(route.url, route.middelware, route.action);
      break;
    case HttpMethod.DELETE:
      router.delete(route.url, route.middelware, route.action);
      break;
    default:
      router.get(route.url, route.middelware, route.action);
      break;
  }
};

export { route, addRoot };
