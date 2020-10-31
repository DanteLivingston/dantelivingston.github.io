import { SocialIcon } from 'react-social-icons';
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
      <hr className='border-secondary my-4' />
      <div className='row'>
        <div className='col-2'></div>
        {strings?.socialLinks?.map((socialLink) => (
          <div className='col-2 text-center' key={socialLink.network}>
            <SocialIcon
              style={{ height: 50, width: 50 }}
              className='ml-3 has-link-svg'
              network={socialLink.network}
              rel='noopener noreferrer'
              target='_blank'
              title={socialLink.title}
              url={socialLink.url}
            />
          </div>
        ))}
        <div className='col-2'></div>
      </div>
      <hr />
      <blockquote className='blockquote'>
        <small class='mb-0'>{strings.inspirationDisclaimer}</small>
      </blockquote>
      <Art type='inspiration' isRounded={true} />
    </>
  );
}

export default About;
