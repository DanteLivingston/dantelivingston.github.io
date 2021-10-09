const strings = {
  about: 'About',
  danteLivingston: 'Dante Livingston',
  tools: 'Tools',
  digital: 'Digital Art',
  digitalDescription:
    'Showcase of my digital art projects including texture creation, photoshop projects and much more.',
  footer: `Dante Livingston Copyright © ${new Date().getFullYear()}`,
  home: 'Home',
  images: 'Images',
  inspiration: 'Inspiration',
  inspirationDisclaimer: 'Note: All inspiration art was designed by the respective artists.',
  enableTools: false,
  errorTitle: 'Oops!',
  errorNotFound: 'This page was not found.',
  errorGoHome: 'Go Home?',
  // network list: https://github.com/jaketrent/react-social-icons/blob/master/src/_networks-db.js
  socialLinks: [
    {
      enabled: false,
      network: 'email',
      title: 'E-mail',
      url: 'mailto:dantelivingston@gmail.com',
    },
    {
      enabled: true,
      network: 'github',
      title: 'GitHub',
      url: 'https://www.github.com/dantelivingston',
    },
    // {
    //   network: 'youtube',
    //   title: 'YouTube',
    //   url: 'https://www.github.com/dantelivingston',
    // },
    {
      enabled: true,
      network: 'linkedin',
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dante-livingston/',
    },
  ],
  traditional: 'Traditional Art',
  traditionalDescription:
    'Showcase of my traditional art projects including ink drawings, sculpture and much more.',
};

export default strings;
