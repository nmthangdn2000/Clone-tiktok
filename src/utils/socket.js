import { io } from 'socket.io-client';
import { SERVER_DOMAIN } from '../constants/constants';

const socket = io(SERVER_DOMAIN);

socket.on('connect', () => {
  console.log('connect');
});

socket.on('disconnect', () => {
  console.log('disconnected');
});

socket.on('notification', () => {
  console.log('notification');
});
