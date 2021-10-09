import { Link } from 'react-router-dom';
import projects from '../config/projects';
import strings from '../config/strings';
import Image from './Image';
import PageTitle from './PageTitle';

function Art({ isRounded, type }) {
  return (
    <>
      <PageTitle includeLineBreak={type !== 'inspiration'}>{strings[type]}</PageTitle>
      {type === 'inspiration' && (
        <blockquote className='blockquote text-center pb-4'>
          <strong class='mb-0 text-muted'>{strings.inspirationDisclaimer}</strong>
        </blockquote>
      )}
      <div className='row'>
        {projects
          ?.filter((project) => project.type === type && project.enabled)
          ?.map((project) => {
            return (
              <div className='col-4 mb-4 text-center' key={project.slug}>
                <Link to={`/art-details/${project.slug}`}>
                  <Image
                    hasLink={true}
                    isRounded={isRounded}
                    keepAspectRatio={true}
                    title={project.title}
                    url={project.splashImageUrl || project?.images?.[0]?.url}
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
