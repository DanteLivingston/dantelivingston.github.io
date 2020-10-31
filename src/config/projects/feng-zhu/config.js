import description from './description';

import fengZhuPFP from './images/FengZhu_PFP.jpg';
import fengZhuAlien from './images/FengZhu_Work_01.jpg';
import fengZhuShip from './images/FengZhu_Work_02.jpg';
import fengZhuLineArt from './images/FengZhu_Work_03.jpg';

const config = {
  slug: 'feng-zhu',
  title: 'Feng Zhu',
  shortDescription: 'Template Sample Description',
  description,
  type: 'inspiration',
  splashImageUrl: fengZhuPFP,
  images: [
    {
      url: fengZhuAlien,
      title: 'Digital Lion Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: fengZhuShip,
      title: 'Digital Lion Caricature by Aaron Blaise',
      description: 'lorem ipsum foobar ridiculus mus',
    },
    {
      url: fengZhuLineArt,
      title: 'Digital Eagle Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar quisque ut',
    },
  ],
};

export default config;
