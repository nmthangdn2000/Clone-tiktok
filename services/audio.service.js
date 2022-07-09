import { ERROR, LIMIT, PAGE } from '../common/constants';
import AudioModel from '../models/audio.model';
import { deleteFile, pagination } from './base.service';

const getAll = async ({ q = '', page = PAGE, limit = LIMIT, sort }) => {
  const query = q
    ? {
        $text: { $search: q },
      }
    : {};

  const count = AudioModel.find(query).countDocuments();
  const getAudio = AudioModel.find(query);

  const [total, audios] = await Promise.all([count, getAudio]);
  if (!audios) throw new Error(ERROR.CanNotGetAudio);

  return {
    data: audios,
    currentPage: Number(page),
    totalPage: pagination(total, limit),
  };
};

const getById = async (id) => {
  const audio = await AudioModel.findById(id);
  if (!audio) throw new Error(ERROR.CanNotGetAudio);
  return audio;
};

const create = async (data) => {
  if (!data.name || !data.author) throw new Error(ERROR.CanNotCreateAudio);
  const newAudio = new AudioModel({
    ...data,
  });
  const audio = await newAudio.save();
  if (!audio) throw new Error(ERROR.CanNotCreateAudio);
  return audio._id;
};

const deleteById = async (id) => {
  if (!id) throw new Error(ERROR.CanNotDeleteAudio);
  const audio = await AudioModel.findByIdAndDelete(id);
  if (!audio) throw new Error(ERROR.CanNotDeleteAudio);

  if (audio.background.split('/')[0] === 'images') deleteFile(audio.background);
  if (audio.background.split('/')[0] === 'audios') deleteFile(audio.url);
};

const updateById = async (id, data) => {
  if (!id) throw new Error(ERROR.CanNotUpdateAudio);
  const update = await AudioModel.updateOne({ _id: id }, { ...data, updatedAt: new Date() });
  if (update.modifiedCount < 1) throw new Error(ERROR.CanNotUpdateAudio);
};

export { getAll, getById, create, deleteById, updateById };
