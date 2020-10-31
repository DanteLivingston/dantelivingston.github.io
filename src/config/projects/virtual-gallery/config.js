import description from './description';

import virtualThumbnail from './images/GalleryThumbnailCompressed.jpg';

const config = {
  slug: 'virtual-gallery',
  title: 'My Virtual Gallery',
  shortDescription:
    'A project from my Art 74 class where I created a virtual gallery for my Pixel Art.',
  description,
  type: 'digital',
  splashImageUrl: virtualThumbnail,
  videos: [
    {
      url: 'https://www.youtube.com/embed/rvO8PisxoFU',
      title: 'Virtual Gallery',
      description:
        'A virtual gallery originally made for my Art 74 class, the gallery and pixel art were both made in SketchUp.',
    },
  ],
};

export default config;
