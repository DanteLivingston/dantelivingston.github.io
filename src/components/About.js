import about from '../config/about';
import strings from '../config/strings';
import Art from './Art';
import Image from './Image';
import PageTitle from './PageTitle';
import aboutImage from '../config/about.jpg';

function About() {
  return (
    <>
      <PageTitle>{strings.about}x</PageTitle>
      <div className='row'>
        <div className='col-4'>
          <Image
            title={strings.danteLivingston}
            url={aboutImage}
            height='450'
            keepAspectRatio={true}
          />
        </div>
        <div className='col-8' dangerouslySetInnerHTML={{ __html: about }}></div>
      </div>
      <hr />
      <Art type='inspiration' isRounded={true} />
    </>
  );
}

export default About;
