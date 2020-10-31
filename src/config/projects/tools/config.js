import description from './description';

import bigRedImage from './images/big-red-image.jpg';
import smallOrangeImage from './images/small-orange-image.jpg';
import smallRedImage from './images/small-red-image.png';

const config = {
  slug: 'tools',
  title: 'Tools',
  shortDescription: 'These are some of my favorite tools',
  description,
  type: 'tools',
  splashImageUrl: smallOrangeImage,
  images: [
    {
      url: bigRedImage,
      title: 'Photoshop',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: smallOrangeImage,
      title: 'iPad',
      description: 'lorem ipsum foobar ridiculus mus',
    },
    {
      url: smallRedImage,
      title: 'quisque ut',
      description: 'lorem ipsum foobar quisque ut',
    },
  ],
};

export default config;
