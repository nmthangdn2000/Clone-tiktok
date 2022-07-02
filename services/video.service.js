import { ERROR, LIMIT, PAGE } from '../common/constants';
import VideoModel from '../models/video.model';
import * as audioService from './audio.service';
import * as likeService from './like.service';
import * as hashtagService from './hashtag.service';
import { textToSlug, pagination, deleteFile, takeScreenshorts, takeAudio } from './base.service';

const getAll = async ({ q = '', page = PAGE, limit = LIMIT, sort }) => {
  const query = q
    ? {
        $or: [
          {
            caption: { $regex: new RegExp(q), $options: 'si' },
            privacy: false,
          },
          {
            captionSlug: { $regex: new RegExp(q), $options: 'si' },
            privacy: false,
          },
          {
            hashtag: { $regex: new RegExp(q), $options: 'si' },
            privacy: false,
          },
        ],
      }
    : { privacy: false };

  const count = VideoModel.find(query).countDocuments();
  // chưa làm sort
  const getVideos = VideoModel.find(query)
    // .populate('categories', 'name slug')
    .populate('audio', 'name author background')
    .skip(page * limit - limit)
    .limit(Number(limit));
  const [total, videos] = await Promise.all([count, getVideos]);
  if (!videos) throw new Error(ERROR.CanNotGetVideo);
  return {
    data: videos,
    currentPage: Number(page),
    totalPage: pagination(total, limit),
  };
};
//pri is private
const getByUser = async ({ id, q: { page = PAGE, limit = LIMIT, sort, privacy = false }, user }) => {
  const query = { author: id };
  // user in token
  if (user) {
    query.privacy = privacy;
    query.author = user;
  } else query.privacy = false;

  const count = VideoModel.find(query).countDocuments();
  const getVideos = VideoModel.find(query)
    // .populate('categories', 'name slug')
    .populate('audio', 'name author background')
    .skip(page * limit - limit)
    .limit(Number(limit));
  const [total, videos] = await Promise.all([count, getVideos]);
  if (!videos) throw new Error(ERROR.CanNotGetVideo);
  return {
    data: videos,
    currentPage: Number(page),
    totalPage: pagination(total, limit),
  };
};

const getById = async (id) => {
  const video = await VideoModel.findById(id).populate('audio', 'name author background');
  if (!video) throw new Error(ERROR.CanNotGetVideo);
  return video;
};

const create = async (data, user, fileName) => {
  //|| data.categories?.length == 0
  if (!user._id || !fileName) throw new Error(ERROR.CanNotCreateVideo);
  // if (!Array.isArray(data.categories)) data.categories = data.categories.split(',').map((category) => category.trim());
  // if (!data.hashtag) data.hashtag = [];
  // else {
  //   data.hashtag = data.hashtag
  //     .split('#')
  //     .map((h) => h.trim())
  //     .filter((f) => f);
  // }
  if (data.caption) data.captionSlug = textToSlug(data.caption, false);
  const background = await takeScreenshorts(fileName);

  if (!data.audio) {
    const fileAudio = await takeAudio(fileName);
    const audio = await audioService.create({
      name: `Nhạc nền - ${user.name}`,
      background: user.avatar,
      author: user.name,
      url: `audios/${fileAudio}`,
    });

    data.audio = audio;
  }

  const url = `videos/${fileName}`;
  const newVideo = new VideoModel({
    ...data,
    background: `images/${background}`,
    author: user._id,
    url,
  });
  const video = await newVideo.save();
  if (!video) throw new Error(ERROR.CanNotCreateVideo);

  const arrayHashtag = data.captionSlug.match(/(^|\s)(#[a-z\d-]+)/gi);
  arrayHashtag.forEach((element) => {
    hashtagService.create(element.split('#')[1].trim()).catch((err) => console.log(err));
  });

  likeService.create(video._id, user._id).catch((err) => console.log(err));
};

const deleteById = async (id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteVideo);
  const video = await VideoModel.findByIdAndDelete(id);
  if (!video) throw new Error(ERROR.CanNotDeleteVideo);

  // remove audio if there are no videos using that audio
  const haveUse = await VideoModel.findOne({ audio: video.audio });
  if (!haveUse) audioService.deleteById(video.audio);

  deleteFile(video.url);
  deleteFile(video.background);

  likeService.deleteByVideo(video._id).catch((err) => console.log(err));
};

const updateById = async (id, data, fileName) => {
  if (!id) throw new Error(ERROR.CanNotUpdateVideo);
  if (fileName) {
    data.url = `videos/${fileName}`;
    const background = await takeScreenshorts(fileName);
    data.background = `images/${background}`;
  }
  const video = await VideoModel.findByIdAndUpdate(id, {
    ...data,
    updatedAt: new Date(),
  });
  if (!video) throw new Error(ERROR.CanNotUpdateVideo);
  if (fileName) {
    deleteFile(video.url);
    deleteFile(video.background);
  }
};

export { getAll, getByUser, getById, create, deleteById, updateById };
