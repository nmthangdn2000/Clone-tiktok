import { ERROR, LIMIT, PAGE } from '../common/constants';
import VideoModel from '../models/video.model';
import * as audioService from './audio.service';
import { textToSlug, pagination, deleteFile, takeScreenshorts, takeAudio } from './base.service';

const getAll = async ({ q = '', page = PAGE, limit = LIMIT, sort }) => {
  const query = q
    ? {
        $or: [
          {
            caption: { $regex: new RegExp(q), $options: 'si' },
          },
          {
            captionSlug: { $regex: new RegExp(q), $options: 'si' },
          },
          {
            hashtag: { $regex: new RegExp(q), $options: 'si' },
          },
        ],
      }
    : {};

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

const getById = async (id) => {
  const video = await VideoModel.findById(id).populate('categories', 'name slug');
  if (!video) throw new Error(ERROR.CanNotGetVideo);
  return video;
};

const create = async (data, user, fileName) => {
  //|| data.categories?.length == 0
  if (user._id || !fileName) throw new Error(ERROR.CanNotCreateVideo);
  // if (!Array.isArray(data.categories)) data.categories = data.categories.split(',').map((category) => category.trim());
  if (!data.hashtag) data.hashtag = [];
  else {
    data.hashtag = data.hashtag
      .split('#')
      .map((h) => h.trim())
      .filter((f) => f);
  }
  if (data.caption) data.captionSlug = textToSlug(data.caption, false);
  const background = await takeScreenshorts(fileName);

  if (!data.audio) {
    const fileAudio = await takeAudio(fileName);
    const audio = await audioService.create({
      name: `Nhạc nền - ${user.name}`,
      background: user.avata,
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
};

const deleteById = async (id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteVideo);
  const video = await VideoModel.findByIdAndDelete(id);
  if (!video) throw new Error(ERROR.CanNotDeleteVideo);
  deleteFile(video.url);
  deleteFile(video.background);
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

export { getAll, getById, create, deleteById, updateById };
