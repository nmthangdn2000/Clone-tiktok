import authRouter from '../router/auth.router';
import userRouter from '../router/user.router';
import categoryRouter from '../router/category.router';
import videoRouter from '../router/video.router';
import commentRouter from '../router/comment.router';
import orderRouter from '../router/order.router';
import wishvideosRouter from '../router/wishvideos.router';

const initRouter = (app) => {
  app.use('/api', authRouter);
  app.use('/api/user', userRouter);
  app.use('/api/category', categoryRouter);
  app.use('/api/video', videoRouter);
  app.use('/api/comment', commentRouter);
  app.use('/api/order', orderRouter);
  app.use('/api/wishvideo', wishvideosRouter);
};

export default initRouter;
