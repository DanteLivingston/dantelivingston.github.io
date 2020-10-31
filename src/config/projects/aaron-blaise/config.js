import description from './description';

import aaronBlaisePFP from './images/AaronBlaise_PFP.jpg';
import aaronBlaiseLion from './images/AaronBlaise_Work_01.jpg';
import aaronBlaiseLionCartoon from './images/AaronBlaise_Work_02.jpg';
import aaronBlaiseEagle from './images/AaronBlaise_Work_03.jpg';

const config = {
  slug: 'aaron-blaise',
  title: 'Aaron Blaise',
  shortDescription: 'Template Sample Description',
  description,
  type: 'inspiration',
  splashImageUrl: aaronBlaisePFP,
  images: [
    {
      url: aaronBlaisePFP,
      title: 'Digital Lion Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: aaronBlaiseLion,
      title: 'Digital Lion Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: aaronBlaiseLionCartoon,
      title: 'Digital Lion Caricature by Aaron Blaise',
      description: 'lorem ipsum foobar ridiculus mus',
    },
    {
      url: aaronBlaiseEagle,
      title: 'Digital Eagle Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar quisque ut',
    },
  ],
};

export default config;
