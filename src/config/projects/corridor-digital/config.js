import description from './description';

import corridorDigitalPFP from './images/CorridorDigital_PFP.jpg';
import corridorDigitalMadMax from './images/CorridorDigital_Work_01.jpg';
import corridorDigitalMashup from './images/CorridorDigital_Work_02.jpg';
import corridorDigitalBostonDynamics from './images/CorridorDigital_Work_03.jpg';

const config = {
  slug: 'corridor-digital',
  title: 'Corridor Digital',
  shortDescription: 'Template Sample Description',
  description,
  type: 'inspiration',
  splashImageUrl: corridorDigitalPFP,
  images: [
    {
      url: corridorDigitalMadMax,
      title: 'Digital Lion Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: corridorDigitalMashup,
      title: 'Digital Lion Caricature by Aaron Blaise',
      description: 'lorem ipsum foobar ridiculus mus',
    },
    {
      url: corridorDigitalBostonDynamics,
      title: 'Digital Eagle Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar quisque ut',
    },
  ],
};

export default config;
