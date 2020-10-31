import about from '../config/about';
import strings from '../config/strings';
import Art from './Art';
import Image from './Image';
import PageTitle from './PageTitle';

function About() {
  return (
    <>
      <PageTitle>{strings.about}</PageTitle>
      <div className='row'>
        <div className='col-4'>
          <Image
            title={strings.danteLivingston}
            url='http://dummyimage.com/400x400.jpg/cc00dd/ffffff'
            height='300'
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
