import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

const pagination = (total, limit) => {
  return Math.ceil(total / limit);
};

const deleteFile = (filename, fileId) => {
  //   if (fileId) driveHelper.deleteFile(fileId);
  if (filename && filename != 'avata-default.png') {
    fs.unlink(`./public/${filename}`, (err) => {
      if (err) console.log(err);
      console.log(`successfully deleted ${filename}`);
    });
  }
};

const listStringImage = (files) => {
  return files.map((file) => file.filename);
};

const textToSlug = (title, sapceToStrikethrough = true) => {
  let slug;

  //Đổi chữ hoa thành chữ thường
  slug = title.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  slug = slug.replace(/đ/gi, 'd');
  if (sapceToStrikethrough) {
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, '-');
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    //In slug ra textbox có id “slug”
  }

  return slug;
};

const takeScreenshorts = (video) => {
  return new Promise((resolve, reject) => {
    const filename = `${video.split('.')[0]}.jpg`;
    ffmpeg({ source: `./public/videos/${video}` })
      .takeScreenshots({
        filename: `./public/images/${filename}`,
        timemarks: ['20%'],
      })
      .on('filenames', (filname) => console.log('create filename: ', filname))
      .on('end', () => {
        resolve(filename);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

const takeAudio = (video) => {
  return new Promise((resolve, reject) => {
    const filename = `${video.split('.')[0]}.mp3`;
    ffmpeg({ source: `./public/videos/${video}` })
      .output(`./public/audios/${filename}`)
      .on('end', function () {
        console.log('conversion ended');
        resolve(filename);
      })
      .on('error', function (err) {
        console.log('error: ', e.code, e.msg);
        reject(err);
      })
      .run();
  });
};

export { textToSlug, pagination, deleteFile, listStringImage, takeScreenshorts, takeAudio };
