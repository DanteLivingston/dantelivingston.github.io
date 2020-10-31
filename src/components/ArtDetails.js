import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useHistory, useParams } from 'react-router-dom';
import projects from '../config/projects';
import strings from '../config/strings';
import Image from './Image';
import PageTitle from './PageTitle';

function ArtDetails() {
  const { slug } = useParams();
  const history = useHistory();

  const project = projects?.find((project) => project.slug === slug);
  if (!project) {
    history.push('/not-found');
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const imageLength = project?.images?.length;
  return project ? (
    <>
      <PageTitle>{project.title}</PageTitle>
      <div className='row'>
        <div className='col-4'>
          {project.type === 'inspiration' && (
            <Image
              className={project.type === 'inspiration' ? 'mt-4 mb-5' : ''}
              isRounded={true}
              hasLink={false}
              height='300'
              keepAspectRatio={true}
              title={project.title}
              url={project.splashImageUrl}
            />
          )}
          <blockquote dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <div className='col-8'>
          {project.images && (
            <>
              <h2 className='text-center'>{strings.images}</h2>
              <div className='row'>
                {project?.images?.map((image, index) => (
                  <div
                    className='col-4 cursor-pointer'
                    key={index}
                    onClick={() => {
                      setImageIndex(index);
                      setIsModalOpen(!isModalOpen);
                    }}
                  >
                    <Image
                      hasLink={true}
                      height='300'
                      keepAspectRatio={true}
                      title={image.title}
                      url={image.url}
                    />
                    <h3
                      className='h5 mt-2 text-center'
                      dangerouslySetInnerHTML={{ __html: image.title }}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
          {project.videos && (
            <div className='row'>
              {project?.videos?.map((video, index) => (
                <div className='col-12' key={index}>
                  {!!project.images && <hr />}
                  <h2>Video</h2>
                  <div className='embed-responsive embed-responsive-16by9'>
                    <iframe
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      className='embed-responsive-item'
                      clipboardWrite='encrypted-media'
                      frameborder='0'
                      src={video.url}
                      title={video.title}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          )}
          {project.audios && (
            <div className='row'>
              {project?.audios?.map((audio, index) => (
                <div className='col-12' key={index}>
                  {!!project.videos && <hr />}
                  <h2>Audio</h2>
                  <audio controls className='w-100'>
                    <source src={audio.url} type='audio/mpeg' />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {project.type === 'inspiration' && (
        <blockquote className='blockquote text-center mt-3'>
          <br />
          <strong className='mt-3 mb-0 text-muted'>{strings.inspirationDisclaimer}</strong>
        </blockquote>
      )}
      {isModalOpen && !!project.images && (
        <Lightbox
          imageTitle={project.images[imageIndex].title}
          imageCaption={project.images[imageIndex].description}
          mainSrc={project.images[imageIndex].url}
          nextSrc={project.images[(imageIndex + 1) % imageLength].url}
          prevSrc={project.images[(imageIndex + imageLength - 1) % imageLength].url}
          onCloseRequest={() => setIsModalOpen(!isModalOpen)}
          onMovePrevRequest={() => setImageIndex((imageIndex + imageLength - 1) % imageLength)}
          onMoveNextRequest={() => setImageIndex((imageIndex + 1) % imageLength)}
        />
      )}
    </>
  ) : null;
}

export default ArtDetails;
