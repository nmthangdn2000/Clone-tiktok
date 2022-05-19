import { ERROR, LIMIT, PAGE } from '../common/constants';
import VideoModel from '../models/video.model';
import { textToSlug, pagination, deleteFile, takeScreenshorts } from './base.service';

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
    .populate('categories', 'name slug')
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
  if (!user || !fileName || data.categories?.length == 0) throw new Error(ERROR.CanNotCreateVideo);
  if (!Array.isArray(data.categories)) data.categories = data.categories.split(',').map((category) => category.trim());
  if (!data.hashtag) data.hashtag = [];
  else {
    data.hashtag = data.hashtag
      .split('#')
      .map((h) => h.trim())
      .filter((f) => f);
  }
  if (data.caption) data.captionSlug = textToSlug(data.caption, false);
  const background = await takeScreenshorts(fileName);
  const url = `videos/${fileName}`;
  const newVideo = new VideoModel({
    ...data,
    background: `images/${background}`,
    author: user,
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
  console.log(id);
  console.log(data);
  if (!id) throw new Error(ERROR.CanNotUpdateVideo);
  // if (files && files.length > 0) data.url = fileName;
  const video = await VideoModel.findByIdAndUpdate(id, { ...data, updatedAt: new Date() });
  if (!video) throw new Error(ERROR.CanNotUpdateVideo);
  // if (fileName) deleteFile(video.url);
};

export { getAll, getById, create, deleteById, updateById };
