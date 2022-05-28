import express from 'express';
import logger from 'morgan';
import appConfig from '../configs/appConfig';
import routerConfig from '../configs/routerConfig';
import path from 'path';
import cors from 'cors';

const app = express();
const __dirname = path.resolve();

const middleware = [
  logger('dev'), // common, dev,
  express.urlencoded({ extended: true }),
  express.json(),
  express.static(path.join(__dirname, 'public')),
];

const initStatic = () => {
  Array.from(middleware).forEach((m) => {
    app.use(m);
  });
  app.get('/check-server', (req, res) => res.json({ success: true }));
};

const initApiRouters = () => {
  app.use(cors({ origin: getCorsOrigins(), credentials: true }));
  routerConfig(app);
};

const start = () => {
  initStatic();
  initApiRouters();
  app.listen(appConfig.env.port, () => console.log(`Server started on port: ${appConfig.env.port}`));
};

export { start };

function getCorsOrigins() {
  const origins = process.env.CORS_ORIGINS;
  if (!origins) return '*';

  return origins.split(',').map((origin) => origin.trim());
}
