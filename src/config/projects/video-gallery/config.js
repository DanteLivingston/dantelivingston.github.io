import description from './description';
import bigRedImage from './images/big-red-image.jpg';
import smallOrangeImage from './images/small-orange-image.jpg';
import smallRedImage from './images/small-red-image.png';

const config = {
  enabled: false,
  slug: 'video-gallery',
  title: 'Video Gallery',
  shortDescription: 'Video Gallery Description',
  description,
  type: 'digital',
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
};

export default config;
