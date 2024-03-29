import description from './description';
import bigRedImage from './images/big-red-image.jpg';
import smallOrangeImage from './images/small-orange-image.jpg';
import smallRedImage from './images/small-red-image.png';

const config = {
  enabled: true,
  slug: 'template-example',
  title: 'Template Sample',
  shortDescription: 'test',
  description,
  type: 'traditional',

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
};

export default config;
