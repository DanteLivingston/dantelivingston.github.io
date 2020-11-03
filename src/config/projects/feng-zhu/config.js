import description from './description';

import fengZhuPFP from './images/FengZhu_PFP.jpg';
import fengZhuAlien from './images/FengZhu_Work_01.jpg';
import fengZhuShip from './images/FengZhu_Work_02.jpg';
import fengZhuLineArt from './images/FengZhu_Work_03.jpg';

const config = {
  slug: 'feng-zhu',
  title: 'Feng Zhu',
  shortDescription:
    'Feng Zhu is a world famous concept artist who focusses on personal projects as well as running his school, FZD School of Design.',
  description,
  type: 'inspiration',
  splashImageUrl: fengZhuPFP,
  images: [
    {
      url: fengZhuAlien,
      title: 'Alien Concept by Feng Zhu',
      description:
        'This digital illustration is representative of most of Feng’s work and shows off his unique style. His use of color and a mix of delicate and random brush strokes creates great focal points within the piece as a whole.',
      dimensions: { height: 900, width: 506 },
    },
    {
      url: fengZhuShip,
      title: 'Alien Ship Design by Feng Zhu',
      description:
        'Another digital illustration with lots of detail and color. In this example Feng also uses 3D to establish the basic forms of the ship as a way to demonstrate how many designs are made in the modern concept art industry.',
      dimensions: { height: 900, width: 412 },
    },
    {
      url: fengZhuLineArt,
      title: 'Cockpit Lineart by Feng Zhu',
      description:
        'This is a lineart sketch of Feng’s that really shows off his skill. The attention to detail and light use of color are able to help sell this even as a rough early draft.',
      dimensions: { height: 1650, width: 850 },
    },
  ],
};

export default config;
