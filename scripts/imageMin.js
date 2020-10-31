const path = require('path');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const fs = require('fs');
const { getFilesFolders } = require('./utility');

const dir = path.join(__dirname, '../src/config/projects');

const imageFolders = getFilesFolders(dir, true, 'folder').filter((file) => file.endsWith('images'));

(async () => {
  imageFolders.forEach(async (imageFolder) => {
    await imagemin([`${imageFolder}/*.{jpeg,jpg,png,PNG}`], {
      destination: imageFolder.replace('images', 'images/min'),
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
        imageminMozjpeg(),
      ],
    });
    const configPath = path.join(imageFolder, '../config.js');
    const config = fs.readFileSync(configPath).toString();
    console.log(config);
    fs.writeFileSync(
      configPath,
      config.replace(/.\/images\//g, './images/min/').replace(/jpg/g, 'jpg')
    );
  });
})();
