import description from './description';

import aaronBlaisePFP from './images/AaronBlaise_PFP.jpg';
import aaronBlaiseLion from './images/AaronBlaise_Work_01.jpg';
import aaronBlaiseLionCartoon from './images/AaronBlaise_Work_02.jpg';
import aaronBlaiseEagle from './images/AaronBlaise_Work_03.jpg';

const config = {
  slug: 'aaron-blaise',
  title: 'Aaron Blaise',
  shortDescription:
    'Aaron Blaise is an American illustrator and animator most known for his work at Disney.',
  description,
  type: 'inspiration',
  splashImageUrl: aaronBlaisePFP,
  images: [
    {
      url: aaronBlaiseLion,
      title: 'Digital Lion Drawing by Aaron Blaise',
      description:
        'This is some of Aaron Blaise’s digital drawing. The way his brushstrokes carefully emulate traditional work and how he uses color like traditional artists use gouache is amazing.',
      dimensions: { height: 1200, width: 969 },
    },
    {
      url: aaronBlaiseLionCartoon,
      title: 'Digital Lion Caricature by Aaron Blaise',
      description:
        'This work is more in the line of the stylized art Aaron Blaise was producing during his time at Disney. The way he renders and shows form under the fur is particularly impressive to me.',
      dimensions: { height: 1200, width: 960 },
    },
    {
      url: aaronBlaiseEagle,
      title: 'Digital Eagle Drawing by Aaron Blaise',
      description:
        'Another more traditional and realistic work of Art from Aaron Blaise. The detail on the hawk’s head is particularly amazing and his understanding of anatomy, as always, is perfect.',
      dimensions: { height: 900, width: 1200 },
    },
  ],
};

export default config;
