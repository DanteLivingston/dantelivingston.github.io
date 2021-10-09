import description from './description';
import MiniatureEffect from './images/miniature.png';
import SnowyMountain from './images/snowmountain.jpeg';

const config = {
  enabled: true,
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
      dimensions: { height: 560, width: 408 },
    },
    {
      url: SnowyMountain,
      title: 'Snowy Weather On Mountain Effect',
      description: 'Made 2018',
      dimensions: { height: 1100, width: 762 },
    },
  ],
};

export default config;
