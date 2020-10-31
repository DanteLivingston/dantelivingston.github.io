import description from './description';

import kimGiPFP from './images/KimJungGi_PFP.jpg';
import kimGiBrush from './images/KimJungGi_Work_01.jpg';
import kimGiColor from './images/KimJungGi_Work_02.jpg';
import kimGiDetail from './images/KimJungGi_Work_03.jpg';

const config = {
  slug: 'kim-jung-gi',
  title: 'Kim Jung Gi',
  shortDescription: 'Template Sample Description',
  description,
  type: 'inspiration',
  splashImageUrl: kimGiPFP,
  images: [
    {
      url: kimGiBrush,
      title: 'Digital Lion Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: kimGiColor,
      title: 'Digital Lion Caricature by Aaron Blaise',
      description: 'lorem ipsum foobar ridiculus mus',
    },
    {
      url: kimGiDetail,
      title: 'Digital Eagle Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar quisque ut',
    },
  ],
};

export default config;