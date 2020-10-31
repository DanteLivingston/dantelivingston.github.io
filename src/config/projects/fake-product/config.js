import description from './description';

import crestBox from './images/min/crestbox.jpeg';
import crestBoxFlavor from './images/min/crestboxflavor.jpeg';
import crestAd from './images/min/crestadd.jpeg';

const config = {
  slug: 'fake-crest-product',
  title: 'Creating a Crest Product in Photoshop',
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
