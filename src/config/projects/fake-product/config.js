import description from './description';

import crestBox from './images/crestbox.jpg';
import crestBoxFlavor from './images/crestboxflavor.jpg';
import crestAd from './images/crestadd.jpg';

const config = {
  slug: 'fake-crest-product',
  title: 'Creating a Crest Product in Photoshop',
  shortDescription: 'A redesign of the Crest box as well as a new product.',
  description,
  type: 'digital',
  images: [
    {
      url: crestBox,
      title: '3D Crest Toothpaste Box',
      description: '3D design of a Crest Toothpaste Box | Made 2018',
    },
    {
      url: crestBoxFlavor,
      title: '3D Fake Flavor Crest Toothpaste Box',
      description: '3D design of a Crest Toothpaste Box with an unique flavor | Made 2018',
    },
    {
      url: crestAd,
      title: 'Advertisement for the Crest Toothpaste',
      description: 'Advertisement to go along with the products | Made 2018',
    },
  ],
};

export default config;
