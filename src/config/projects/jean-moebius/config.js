import description from './description';

import jeanMoebiusPFP from './images/min/JeanGiraud_PFP.jpg';
import jeanMoebiusCharacter from './images/min/JeanGiraud_Work_01.jpg';
import jeanMoebiusLandscape from './images/min/JeanGiraud_Work_02.jpg';
import jeanMoebiusDesert from './images/min/JeanGiraud_Work_03.jpg';

const config = {
  slug: 'jean-giraud',
  title: 'Jean Giraud "Moebius"',
  shortDescription: 'Template Sample Description',
  description,
  type: 'inspiration',
  splashImageUrl: jeanMoebiusPFP,
  images: [
    {
      url: jeanMoebiusPFP,
      title: 'Digital Lion Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: jeanMoebiusCharacter,
      title: 'Digital Lion Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: jeanMoebiusLandscape,
      title: 'Digital Lion Caricature by Aaron Blaise',
      description: 'lorem ipsum foobar ridiculus mus',
    },
    {
      url: jeanMoebiusDesert,
      title: 'Digital Eagle Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar quisque ut',
    },
  ],
};

export default config;
