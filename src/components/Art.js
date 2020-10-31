import { Link } from 'react-router-dom';
import projects from '../config/projects';
import PageTitle from './PageTitle';
import strings from '../config/strings';
import Image from './Image';

function Art({ isRounded, type }) {
  return (
    <>
      <PageTitle>{strings[type]}</PageTitle>
      <div className='row'>
        {projects
          ?.filter((projects) => projects.type === type)
          ?.map((project) => {
            return (
              <div className='col-4 mb-4 text-center' key={project.slug}>
                <Link to={`/art-details/${project.slug}`}>
                  <Image
                    className={isRounded ? 'rounded-circle' : ''}
                    hasLink={true}
                    keepAspectRatio={true}
                    title={project.title}
                    url={project.splashImageUrl || project.images[0].url}
                  />
                  <h3 className='h5 mt-2'>{`${project.title}`}</h3>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Art;
