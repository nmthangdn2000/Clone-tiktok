import { Server } from 'socket.io';
import { verifyUserSocket } from '../middlewares/authentic.middleware';

let io = null;
let socket = null;

const socketIo = (server) => {
  io = new Server(server, {
    cors: { origin: getCorsOrigins(), credentials: true },
  });

  io.use(verifyUserSocket);

  const onConnection = (s) => {
    socket = s;

    console.log('onConnection ', socket.id);
    // likeSocket(io, s);
    socket.on('disconnecting', () => {
      console.log(socket.rooms);
    });

    socket.on('disconnect', () => {
      console.log('disconnect ', socket.id);
    });
  };

  io.on('connection', onConnection);
};

export default socketIo;

export { io, socket };

function getCorsOrigins() {
  const origins = process.env.CORS_ORIGINS;
  if (!origins) return '*';

  return origins.split(',').map((origin) => origin.trim());
}
