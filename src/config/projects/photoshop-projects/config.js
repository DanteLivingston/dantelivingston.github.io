import description from './description';

import MiniatureEffect from './images/miniature.png';
import SnowyMountain from './images/snowmountain.jpeg';

const config = {
  slug: 'photoshop-projects',
  title: 'Photoshop Skill Projects',
  shortDescription: 'Individual Photoshop Projects I have completed as a part of my Art 74 Class.',
  description,
  type: 'digital',
  images: [
    {
      url: MiniatureEffect,
      title: 'Miniature Effect',
      description: 'Made 2018',
    },
    {
      url: SnowyMountain,
      title: 'Snowy Weather On Mountain Effect',
      description: 'Made 2018',
    },
  ],
};

export default config;
