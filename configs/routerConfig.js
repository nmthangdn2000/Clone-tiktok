import authRouter from '../router/auth.router';
import userRouter from '../router/user.router';
import categoryRouter from '../router/category.router';
import videoRouter from '../router/video.router';
import commentRouter from '../router/comment.router';
import followRouter from '../router/follow.router';
import wishvideosRouter from '../router/wishvideos.router';
import likeRouter from '../router/like.router';
import notificationRouter from '../router/notification.router';
import audioRouter from '../router/audio.router';

const initRouter = (app) => {
  app.use('/api', authRouter);
  app.use('/api/user', userRouter);
  app.use('/api/category', categoryRouter);
  app.use('/api/video', videoRouter);
  app.use('/api/comment', commentRouter);
  app.use('/api/follow', followRouter);
  app.use('/api/wishvideo', wishvideosRouter);
  app.use('/api/like', likeRouter);
  app.use('/api/notification', notificationRouter);
  app.use('/api/audio', audioRouter);
};

export default initRouter;
