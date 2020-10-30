import { Link } from 'react-router-dom';
import projects from '../config/projects';
import PageTitle from './PageTitle';
import strings from '../config/strings';
import Image from './Image';

function Art({ type }) {
  return (
    <>
      <PageTitle>{strings[type]}</PageTitle>
      <div className='row'>
        {projects
          .filter((projects) => projects.type === type)
          .map((project) => {
            return (
              <div className='col-sm-4 mb-4 text-center' key={project.slug}>
                <Link to={`/art-details/${project.slug}`}>
                  <Image
                    hasLink={true}
                    keepAspectRatio={true}
                    title={project.title}
                    url={project.images[0].url}
                  />
                </Link>
                {`${project.title} (${project.images.length})`}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Art;
