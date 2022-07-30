import { CONTEN_NOTIFICATION, ERROR, LIMIT, PAGE, REF_MODEL } from '../common/constants';
import NotificationModel from '../models/notification.model';
import VideoModel from '../models/video.model';
import UserModel from '../models/user.model';
import FollowModel from '../models/follow.model';
import { io, socket } from '../socket/index.socket';

const likeNotification = async (idVideo, idUser) => {
  const video = await VideoModel.findById(idVideo).select('author').lean();
  if (video.author === idUser) return;
  const data = {
    sender: idUser,
    receiver: video.author,
    type: REF_MODEL.VIDEO,
    typeID: idVideo,
    content: CONTEN_NOTIFICATION.LIKE,
  };
  const newNotify = new NotificationModel(data);
  await newNotify.save();

  socket.emit('notification');
};

const videoNotification = async (idVideo, idUser) => {
  const follower = await FollowModel.findOne({ user: idUser }).select('follower').lean();
  const data = follower.map((f) => {
    return {
      sender: idUser,
      receiver: f,
      type: REF_MODEL.VIDEO,
      typeID: idVideo,
      content: CONTEN_NOTIFICATION.NEW_VIDEO,
    };
  });
  await NotificationModel.insertMany(data);
  socket.emit('notification');
};

export { likeNotification, videoNotification };
