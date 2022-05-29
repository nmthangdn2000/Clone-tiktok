import { ERROR } from '../common/constants';
import AudioModel from '../models/audio.model';
import { deleteFile } from './base.service';

const getAll = async (query) => {
  const audio = await AudioModel.find({});
  if (!audio) throw new Error(ERROR.CanNotGetAudio);
  return audio;
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
