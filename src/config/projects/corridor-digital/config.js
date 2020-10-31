import description from './description';

import corridorDigitalPFP from './images/CorridorDigital_PFP.jpg';
import corridorDigitalMadMax from './images/CorridorDigital_Work_01.jpg';
import corridorDigitalMashup from './images/CorridorDigital_Work_02.jpg';
import corridorDigitalBostonDynamics from './images/CorridorDigital_Work_03.jpg';

const config = {
  slug: 'corridor-digital',
  title: 'Corridor Digital',
  shortDescription:
    'Corridor Digital is a Youtube group who has been on the platform for ten years.',
  description,
  type: 'inspiration',
  splashImageUrl: corridorDigitalPFP,
  images: [
    {
      url: corridorDigitalMadMax,
      title: "Corridor's Max Max Padory",
      description:
        'This is a scene from Corridor’s Mad Max parody that really shows off their triple A production quality. The color grading, set and costume design are on par with any movie or television show despite it being a four minute comedy skit.',
    },
    {
      url: corridorDigitalMashup,
      title: "Corridor's Media Mash-Up Skit",
      description:
        'A scene from one of Corridor’s mash up videos where they combine characters from all over video game and movie culture. This portrays what a good amount of their early skit work was focussed on.',
    },
    {
      url: corridorDigitalBostonDynamics,
      title: "Corridor's 'Bosstown Dynamics' Skit",
      description:
        'This is one of Corridor’s more recent projects in which they used motion capture and photoreal HDRIs and textures to create the most realistic Boston Dynamics robot they could. Their use of modern technology to get a great result despite being a company with only 7 or so VFX artists (many self taught) inspires me in regards to my own progress towards becoming a better artist. ',
    },
  ],
};

export default config;
