import description from './description';
import drawing_01 from './images/InkDrawing_01.jpg';
import drawing_02 from './images/InkDrawing_02.jpg';
import drawing_03 from './images/InkDrawing_03.jpg';
import drawing_04 from './images/InkDrawing_04.jpg';
import drawing_05 from './images/InkDrawing_05.jpg';
import drawing_06 from './images/InkDrawing_06.jpg';
import drawing_07 from './images/InkDrawing_07.jpg';

const config = {
  enabled: true,
  slug: 'ink-drawing',
  title: 'Traditional Ink Drawings',
  shortDescription: 'Nature studies done traditionally with a bamboo quill and ink.',
  description,
  type: 'traditional',
  splashImageUrl: drawing_01,
  images: [
    {
      url: drawing_01,
      title: 'Ink Drawing of Contrast',
      description: 'Made 2019',
    },
    {
      url: drawing_02,
      title: 'Ink Drawing of Negative Space',
      description: 'Made 2019',
    },
    {
      url: drawing_03,
      title: 'Second Ink Drawing of Negative Space',
      description: 'Made 2019',
    },
    {
      url: drawing_04,
      title: 'Ink Drawing of Vines',
      description: 'Made 2019',
    },
    {
      url: drawing_05,
      title: 'Ink Drawing of Blotchy Leaves',
      description: 'Made 2019',
    },
    {
      url: drawing_06,
      title: 'Ink Drawing of Branches',
      description: 'Made 2019',
    },
    {
      url: drawing_07,
      title: 'Ink Drawing of Large Leaves',
      description: 'Made 2019',
    },
  ],
};

export default config;
