import { Server } from 'socket.io';
import { verifyUserSocket } from '../middlewares/authentic.middleware';
import likeSocket from './like.socket';

const socketIo = (server) => {
  const io = new Server(server, {
    cors: { origin: getCorsOrigins(), credentials: true },
  });

  io.use(verifyUserSocket);

  const onConnection = (socket) => {
    likeSocket(io, socket);
  };

  io.on('connection', onConnection);
};

export default socketIo;

function getCorsOrigins() {
  const origins = process.env.CORS_ORIGINS;
  if (!origins) return '*';

  return origins.split(',').map((origin) => origin.trim());
}
