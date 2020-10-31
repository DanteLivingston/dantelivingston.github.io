import { Link } from 'react-router-dom';

import projects from '../config/projects';
import PageTitle from './PageTitle';
import strings from '../config/strings';
import { useHistory } from 'react-router-dom';
import Image from './Image';
import digitalImage from '../config/projects/digital-textures/images/MossyRocks_3D.png';
import traditionalImage from '../config/projects/template/images/big-red-image.jpg';
import { CameraFill, EaselFill } from 'react-bootstrap-icons';
import _shuffle from 'lodash.shuffle';
import Carousel from './Carousel';

function Home() {
  let history = useHistory();
  const filteredProjects = _shuffle(
    projects?.filter(({ type }) => type !== 'inspiration' && type !== 'tools') ?? []
  );

  return (
    <>
      <PageTitle>{strings.home}</PageTitle>
      <Carousel items={filteredProjects} />
      <hr className='border-secondary my-4' />
      <div className='row'>
        <div className='col-6'>
          <div className='card shadow-lg'>
            <Image
              className='card-img-top'
              hasLink={true}
              keepAspectRatio={true}
              onClick={() => history.push('digital-art')}
              title={strings.digitalDescription}
              url={digitalImage}
            />
            <div className='card-body'>
              <h5 className='card-title'>
                <Link to='/digital-art'>
                  <CameraFill style={{ marginTop: '-5px' }} className='mr-2' />
                  {strings.digital}
                </Link>
              </h5>
              <p className='card-text'>{strings.digitalDescription}</p>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='card shadow-lg'>
            <Image
              className='card-img-top'
              hasLink={true}
              keepAspectRatio={true}
              onClick={() => history.push('traditional-art')}
              title={strings.traditionalDescription}
              url={traditionalImage}
            />
            <div className='card-body'>
              <h5 className='card-title'>
                <Link to='/traditional-art'>
                  <EaselFill style={{ marginTop: '-5px' }} className='mr-2' />
                  {strings.traditional}
                </Link>
              </h5>
              <p className='card-text'>{strings.traditionalDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
