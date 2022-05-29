import multer from 'multer';

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const field = file.fieldname;
    let path = '';
    if (field == 'audio') path = './public/audios';
    else if (field == 'background') path = './public/images';
    else if (field == 'avatar') path = './public/avatars';
    else path = './public/videos';
    return cb(null, path);
  },
  filename: (req, file, cb) => {
    const field = file.fieldname;
    let name = '';
    if (field == 'audio') name = 'audio';
    else if (field == 'background') name = 'image';
    else if (field == 'avatar') name = 'avata';
    else name = 'video';
    const originalname = file.originalname.split('.');
    const fileName = `${Date.now()}-${name}.${originalname[originalname.length - 1]}`;
    cb(null, fileName);
  },
});

const memoryStorage = multer.memoryStorage();

//   const filterFile;

const uploadDiskStorage = multer({
  storage: diskStorage,
});

const uploadMemoryStorage = multer({
  storage: memoryStorage,
});

export { uploadDiskStorage, uploadMemoryStorage };
