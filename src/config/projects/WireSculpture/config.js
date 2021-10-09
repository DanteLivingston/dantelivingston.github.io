import description from './description';
import fanFrontView from './images/FanFrontView.jpg';
import fanSideView from './images/FanSideView.jpg';
import fanThreeQuartersView from './images/FanThreeQuartersView.jpg';
import wireBall from './images/WireBall.jpg';

const config = {
  enabled: true,
  slug: 'wire-sculpture',
  title: 'Wire Sculptures',
  shortDescription: 'A series of two sculptures made entirely of wire.',
  description,
  type: 'traditional',
  splashImageUrl: wireBall,
  images: [
    {
      url: wireBall,
      title: 'Wire Ball Sculpture',
      description:
        'This is the original wire ball sculpture I created and was meant as a testing ground to understand the medium. | Made 2019',
    },
    {
      url: fanFrontView,
      title: 'Fan Sculpture Front View',
      description: 'Front view of the main fan sculpture I have created. | Made 2019',
    },
    {
      url: fanSideView,
      title: 'Fan Sculpture Side View',
      description: 'Side view of the main fan sculpture I have created. | Made 2019',
    },
    {
      url: fanThreeQuartersView,
      title: 'Fan Sculpture Three Quarters View',
      description:
        'Three quarters view of the main fan sculpture I have created, this image shows off depth and form well. | Made 2019',
    },
  ],
};

export default config;
