import * as likeService from '../services/like.service';
import { io, socket } from './index.socket';

const user = socket.user;

const like = async (idVideo) => {
  await likeService.updateByUser(user._id, idVideo);
};

const dislike = async (idVideo) => {
  await likeService.deleteByUser(user._id, idVideo);
};

const test = (idVideo, cb) => {
  setTimeout(() => {
    cb({ message: 'test', idVideo, user });
  }, 10000);
};

socket.on('like:like', like);
socket.on('like:dislike', dislike);
socket.on('like:test', test);
