import description from './description';
//import crestAd from './images/crestadd.jpg';
//import crestBox from './images/crestbox.jpg';
//import crestBoxFlavor from './images/crestboxflavor.jpg';

const config = {
  enabled: false,
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
      dimensions: { height: 800, width: 800 },
    },
    {
      url: crestBoxFlavor,
      title: '3D Fake Flavor Crest Toothpaste Box',
      description: '3D design of a Crest Toothpaste Box with an unique flavor | Made 2018',
      dimensions: { height: 800, width: 800 },
    },
    {
      url: crestAd,
      title: 'Advertisement for the Crest Toothpaste',
      description: 'Advertisement to go along with the products | Made 2018',
      dimensions: { height: 618, width: 800 },
    },
  ],
};

export default config;
