import description from './description';

import audioForm from './images/AudioForm.jpg';
import audioProject from './audios/Art110SoundProj_mixdown.mp3';

const config = {
  slug: 'interactive-audio-project',
  title: 'Sounds of Work',
  shortDescription: 'A project where you listen to audio while filling out a form.',
  description,
  type: 'digital',
  splashImageUrl: audioForm,
  // images: [
  //   {
  //     url: audioForm,
  //     title: 'Corrugated Roof Texture (3D)',
  //     description: '3D texture of a Corrugated Roof Material | Made 2019',
  //   },
  // ],
  audios: [
    {
      url: audioProject,
      title: 'Sounds of Work',
      description:
        'This is the audio section of my "Sounds of Work" project. You should listen to this while filling out the google form for the best and intentded experience.',
    },
  ],
};

export default config;
