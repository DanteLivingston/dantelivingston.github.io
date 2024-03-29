import description from './description';
import editingThumbnail from './images/EditingProjThumbnailCompressedl.jpg';

const config = {
  enabled: true,
  slug: 'video-editing-project',
  title: 'Walking Through my Home',
  shortDescription: 'A project from my Art 75 class focussing on learning Video Editing.',
  description,
  type: 'digital',
  splashImageUrl: editingThumbnail,
  videos: [
    {
      url: 'https://www.youtube.com/embed/Cw3HNFUMcss',
      title: 'Art 75 Permiere Pro Editing Project',
      description:
        'My first project using Adobe Premiere Pro for my Art 75 class. This showcases some of the earliest things I have learned in regards to making interesting transitions and editing as a whole.',
    },
  ],
};

export default config;
