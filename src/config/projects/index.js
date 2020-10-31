import template from './template/config';
import digitalTextures from './digital-textures/config';
import videoEditingProject from './video-editing-project/config';
import virtualGallery from './virtual-gallery/config';
import interactiveAudioProject from './interactive-audio-project/config';
import hayaoMiyazaki from './hayao-miyazaki/config';
import aaronBlaise from './aaron-blaise/config';
import corridorDigital from './corridor-digital/config';
import fengZhu from './feng-zhu/config';
import jeanMoebius from './jean-moebius/config';
import kimJungGi from './kim-jung-gi/config';
import glitchArt from './glitch-art/config';
import photoshopprojects from './photoshop-projects/config';
import fakeproduct from './fake-product/config';
import digitalPhotography from './digital-photography/config';
import videoGallery from './video-gallery/config';
import tools from './tools/config';

const projects = [
  // Digital Art
  digitalTextures,
  glitchArt,
  photoshopprojects,
  fakeproduct,
  digitalPhotography,
  videoGallery,
  videoEditingProject,
  virtualGallery,
  interactiveAudioProject,
  // Inspiration
  hayaoMiyazaki,
  aaronBlaise,
  corridorDigital,
  fengZhu,
  jeanMoebius,
  kimJungGi,
  // Traditional Art
  template,
  // Other
  tools,
];

export default projects;
