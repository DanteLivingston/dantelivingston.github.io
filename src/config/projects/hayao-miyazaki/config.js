import description from './description';

import hayaoMiyazakiPFP from './images/min/HayaoMiyazaki_PFP.jpg';
import hayaoMiyazakTotoro from './images/min/HayaoMiyazaki_Work_01.jpg';
import hayaoMiyazakiMononoke from './images/min/HayaoMiyazaki_Work_02.jpg';
import hayaoMiyazkiNausicaa from './images/min/HayaoMiyazaki_Work_03.jpg';

const config = {
  slug: 'hayao-miyazaki',
  title: 'Hayao Miyazaki',
  shortDescription: 'Template Sample Description',
  description,
  type: 'inspiration',
  splashImageUrl: hayaoMiyazakiPFP,
  images: [
    {
      url: hayaoMiyazakiPFP,
      title: 'Digital Lion Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: hayaoMiyazakTotoro,
      title: 'Digital Lion Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar magna vulputate',
    },
    {
      url: hayaoMiyazakiMononoke,
      title: 'Digital Lion Caricature by Aaron Blaise',
      description: 'lorem ipsum foobar ridiculus mus',
    },
    {
      url: hayaoMiyazkiNausicaa,
      title: 'Digital Eagle Drawing by Aaron Blaise',
      description: 'lorem ipsum foobar quisque ut',
    },
  ],
};

export default config;
