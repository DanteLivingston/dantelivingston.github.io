import description from './description';

import DogGlitchArt from './images/Dog_GlitchArt.PNG';
import EverestGlitchArt from './images/Everest_GlitchArt.jpg';
import ForestGlitchArt from './images/Forest_GlitchArt.jpg';

const config = {
  slug: 'glitch-art',
  title: 'Glitch Art',
  shortDescription: 'test',
  description,
  type: 'digital',
  images: [
    {
      url: EverestGlitchArt,
      title: 'Glitch art of Mount Everest',
      description: 'Made 2018',
    },
    {
      url: DogGlitchArt,
      title: 'Glitch art of a dog',
      description: 'Made 2018',
    },
    {
      url: ForestGlitchArt,
      title: 'Glitch art of a Pacific Northwest Forest',
      description: 'Made 2018',
    },
  ],
};

export default config;
