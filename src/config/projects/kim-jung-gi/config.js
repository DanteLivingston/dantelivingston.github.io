import description from './description';

import kimGiPFP from './images/KimJungGi_PFP.jpg';
import kimGiBrush from './images/KimJungGi_Work_01.jpg';
import kimGiColor from './images/KimJungGi_Work_02.jpg';
import kimGiDetail from './images/KimJungGi_Work_03.jpg';

const config = {
  slug: 'kim-jung-gi',
  title: 'Kim Jung Gi',
  shortDescription:
    'Kim Jung Gi is a Korean cartoonist famous for his ability to draw detailed scenes from memory.',
  description,
  type: 'inspiration',
  splashImageUrl: kimGiPFP,
  images: [
    {
      url: kimGiBrush,
      title: 'Brush Drawing by Kim Jung Gi',
      description:
        'A scene of Gi’s which demonstrates his mastery of the brush pen. The way the deep black smudges to create form and contrast is very well done.',
    },
    {
      url: kimGiColor,
      title: 'Samurai Cartoon by Kim Jung Gi',
      description:
        'This is some of Gi’s work in a more cartoony style. I love the way he is able to draw amazing perspective in freehand and the detail he can show off.',
    },
    {
      url: kimGiDetail,
      title: 'Rally',
      description:
        'This is another scene of Gi’s that really emphasizes his detailed line art. The mechanics’ jumpsuits and the engines are especially inspiring to me.',
    },
  ],
};

export default config;
