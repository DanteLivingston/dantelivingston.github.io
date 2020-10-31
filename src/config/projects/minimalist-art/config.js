import description from './description';

import minimalistSpread from './images/MinimalistSpread.jpg';
import swissArmy_01 from './images/SwissArmyMinimalist_01.jpg';
import swissArmy_02 from './images/SwissArmyMinimalist_02.jpg';
import swissArmy_03 from './images/SwissArmyMinimalist_03.jpg';
import swissArmy_04 from './images/SwissArmyMinimalist_04.jpg';
import swissArmyFull from './images/SwissArmyMinimalistFull.jpg';

const config = {
  slug: 'minimalism-art',
  title: 'Minimalist / Contrast Artwork',
  shortDescription: 'A series of peices focussing on minimalism and contrast.',
  description,
  type: 'traditional',
  splashImageUrl: minimalistSpread,
  images: [
    {
      url: minimalistSpread,
      title: 'A Spread of Minimalist Line Art',
      description: 'Made 2019',
    },
    {
      url: swissArmyFull,
      title: 'Full spread of Swiss Army Knife Works',
      description: 'Made 2019',
    },
    {
      url: swissArmy_04,
      title: 'Minimalist Swiss Army Knife',
      description: 'Made 2019',
    },
    {
      url: swissArmy_01,
      title: "Minimalist Swiss Army Knife's Blade",
      description: 'Made 2019',
    },
    {
      url: swissArmy_02,
      title: "Minimalist Swiss Army Knife's Scooper Tool",
      description: 'Made 2019',
    },
    {
      url: swissArmy_03,
      title: "Minimalist Swiss Army Knife's Bottle Opener Tool",
      description: 'Made 2019',
    },
  ],
};

export default config;
