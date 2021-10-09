import description from './description';
import hayaoMiyazakiPFP from './images/HayaoMiyazaki_PFP.jpg';
import hayaoMiyazakTotoro from './images/HayaoMiyazaki_Work_01.jpg';
import hayaoMiyazakiMononoke from './images/HayaoMiyazaki_Work_02.jpg';
import hayaoMiyazkiNausicaa from './images/HayaoMiyazaki_Work_03.jpg';

const config = {
  enabled: true,
  slug: 'hayao-miyazaki',
  title: 'Hayao Miyazaki',
  shortDescription: 'A Japanese animation and comic Icon.',
  description,
  type: 'inspiration',
  splashImageUrl: hayaoMiyazakiPFP,
  images: [
    {
      url: hayaoMiyazakTotoro,
      title: "A scene from Studio Ghibli's Totoro",
      description:
        'A shot from the movie Totoro by Studio Ghibli. This is a great example of Ghibli’s color use and how Miyazaki’s work as a traditional watercolor artist has defined the look of his movies’ backgrounds.',
      dimensions: { height: 1132, width: 634 },
    },
    {
      url: hayaoMiyazakiMononoke,
      title: "A scene from Studio Ghibli's Princess Mononoke",
      description:
        'This is a good example of the way simplicity is used in Japanese Anime. When looking at this work as a line drawing there is not a huge amount of detail or beautiful shading, however despite that the readability and composition is still better than some more detailed works.',
      dimensions: { height: 1200, width: 628 },
    },
    {
      url: hayaoMiyazkiNausicaa,
      title: "A page from Hayao Miyazaki's Nausicaa Manga",
      description:
        'This is an example of Hayao Miyazaki’s Manga (Japanese Comics) art. I love his use of value and how so much form can be shown just with the use of small sketch-like lines.',
      dimensions: { height: 662, width: 621 },
    },
  ],
};

export default config;
