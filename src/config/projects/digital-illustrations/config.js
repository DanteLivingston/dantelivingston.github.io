import description from './description';
import group from './images/Konosubagroup_web.png';
import aqua from './images/Konosuba_Aqua_web.png';
import darkness from './images/Konosuba_Darkness_web.png';
import kazuma from './images/Konosuba_Kazuma_web.png';
import megumin from './images/Konosuba_Megumin_web.png';

const config = {
  enabled: true,
  slug: 'digital_illustration',
  title: 'Digital Illustrations',
  shortDescription: 'A series of digital illustrations of characters from the anime "KonoSuba"',
  description,
  splashImageUrl: group,
  type: 'digital',
  images: [
    {
      url: group,
      title: 'The Konosuba crew',
      description:
        'The main characters from the anime "Kono Subarashii Sekai ni Shukufuku wo!" | Made 2020',
      dimensions: { height: 2000, width: 856 },
    },
    {
      url: aqua,
      title: 'Aqua from Konosuba',
      description:
        'My first piece of digital art, Aqua who I mainly used cell shading with and followed scenes from the show exactly | Made 2020',
      dimensions: { height: 1200, width: 1267 },
    },
    {
      url: kazuma,
      title: 'Kazuma from Konosuba',
      description:
        'My latest piece, Kazuma who I tried to incorporate a better use of shading and especially light with | Made 2020',
      dimensions: { height: 1200, width: 2000 },
    },
    {
      url: megumin,
      title: 'Megumin from Konosuba',
      description:
        'With Megumin I began to experiment with shadow options outside of cell shading | Made 2020',
      dimensions: { height: 1200, width: 2000 },
    },
    {
      url: darkness,
      title: 'Darkness from Konosuba',
      description:
        'For Darkness, I tried to experiment with making more interesting poses | Made 2020 ',
      dimensions: { height: 1200, width: 2000 },
    },
  ],
};

export default config;
