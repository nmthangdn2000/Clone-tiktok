import multer from 'multer';

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/videos');
  },
  filename: (req, file, cb) => {
    const originalname = file.originalname.split('.');
    const fileName = Date.now() + '-videos.' + originalname[originalname.length - 1];
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
