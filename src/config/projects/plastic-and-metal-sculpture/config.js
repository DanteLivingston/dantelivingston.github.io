import description from './description';
import sharkSideView from './images/SharkSideView.jpg';
import sharkThreeQuartersView from './images/SharkThreeQuarterView.jpg';
import sharkThreeQuartersView_02 from './images/SharkThreeQuarterView_02.jpg';
import sharkTopView from './images/SharkTopView.jpg';

const config = {
  enabled: true,
  slug: 'plastic-sculpture',
  title: 'Polluted Art',
  shortDescription: 'A sculpture created with plastic waste and casted metal components.',
  description,
  type: 'traditional',
  splashImageUrl: sharkThreeQuartersView_02,
  images: [
    {
      url: sharkSideView,
      title: 'Shark Sculpture Side View',
      description: 'Made 2019',
    },
    {
      url: sharkThreeQuartersView,
      title: 'Shark Sculpture Three Quarters View',
      description: 'Made 2019',
    },
    {
      url: sharkThreeQuartersView_02,
      title: 'Shark Sculpture Alternate Three Quarters View',
      description: 'Made 2019',
    },
    {
      url: sharkTopView,
      title: 'Shark Sculpture Top View',
      description: 'Made 2019',
    },
  ],
};

export default config;
