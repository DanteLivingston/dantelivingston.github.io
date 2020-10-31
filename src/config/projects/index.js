import template from './template/config';
import digitalTextures from './digital-textures/config';
import hayaoMiyazaki from './hayao-miyazaki/config';
import aaronBlaise from './aaron-blaise/config';
import corridorDigital from './corridor-digital/config';
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
  // Inspiration
  hayaoMiyazaki,
  aaronBlaise,
  corridorDigital,
  // Traditional Art
  template,
  // Other
  tools,
];

export default projects;
