import description from './description';

import jeanMoebiusPFP from './images/JeanGiraud_PFP.jpg';
import jeanMoebiusCharacter from './images/JeanGiraud_Work_01.jpg';
import jeanMoebiusLandscape from './images/JeanGiraud_Work_02.jpg';
import jeanMoebiusDesert from './images/JeanGiraud_Work_03.jpg';

const config = {
  slug: 'jean-giraud',
  title: 'Jean Giraud "Moebius"',
  shortDescription:
    'A French surrealist comic who has worked with Stan Lee and insipired Hayao Miyazaki.',
  description,
  type: 'inspiration',
  splashImageUrl: jeanMoebiusPFP,
  images: [
    {
      url: jeanMoebiusCharacter,
      title: 'Starwatcher Holding a Crystal',
      description:
        'Some of Moebius’ character art that shows his ability to go from blank shapes to areas of very high detail. His use of color always impresses me and it is no exception here.',
      dimensions: { height: 1280, width: 1653 },
    },
    {
      url: jeanMoebiusLandscape,
      title: 'A surrealist landscape by Moebius',
      description:
        'This is some environment art done by Moebius that again expresses his ability to create beautiful line art. The color also emphasizes the line work instead of just taking place over it due to his “comic book” style.',
      dimensions: { height: 1280, width: 970 },
    },
    {
      url: jeanMoebiusDesert,
      title: 'A Drawing from "20 Days in the Desert"',
      description:
        'This is one of my favourite pieces done by Moebius. The insane detail coupled with a stark, empty background is perfectly representative of his style.',
      dimensions: { height: 670, width: 447 },
    },
  ],
};

export default config;
