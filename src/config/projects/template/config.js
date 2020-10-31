import description from './description';

import bigRedImage from './images/min/big-red-image.jpg';
import smallOrangeImage from './images/min/small-orange-image.jpg';
import smallRedImage from './images/min/small-red-image.png';
import audio from './audios/test.mp3';

const config = {
  slug: 'template-example',
  title: 'Template Sample',
  shortDescription: 'Template Sample Description',
  description,
  type: 'traditional',
  splashImageUrl: smallOrangeImage,
  images: [
    {
      url: bigRedImage,
      title: 'magna vulputate',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: smallOrangeImage,
      title: 'ridiculus mus',
      description: 'lorem ipsum foobar ridiculus mus',
    },
    {
      url: smallRedImage,
      title: 'quisque ut',
      description: 'lorem ipsum foobar quisque ut',
    },
  ],
  videos: [
    {
      url: 'https://www.youtube.com/embed/rvO8PisxoFU',
      title: 'My Amazing Video',
      description: 'My Amazing Video Description',
    },
  ],
  audios: [
    {
      url: audio,
      title: 'My Amazing Video',
      description: 'My Amazing Video Description',
    },
  ],
};

export default config;
