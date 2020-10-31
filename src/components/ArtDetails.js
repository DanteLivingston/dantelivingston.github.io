import { useParams } from 'react-router-dom';
import projects from '../config/projects';
import PageTitle from './PageTitle';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import LazyLoad from 'react-lazyload';
import Image from './Image';
import strings from '../config/strings';

function ArtDetails() {
  let { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const imageLength = project.images.length;
  return (
    <>
      <PageTitle>{project.title}</PageTitle>
      {project.type === 'inspiration' && (
        <blockquote className='blockquote'>
          <small class='mb-0'>{strings.inspirationDisclaimer}</small>
        </blockquote>
      )}
      <div className='row'>
        <div className='col-4'>
          <blockquote dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <div className='col-8'>
          {project.images && (
            <>
              <h2>Images</h2>
              <div className='row'>
                {project.images.map((image, index) => (
                  <div
                    className='col-4 cursor-pointer'
                    key={index}
                    onClick={() => {
                      setImageIndex(index);
                      setIsModalOpen(!isModalOpen);
                    }}
                  >
                    <LazyLoad height={400}>
                      <Image
                        hasLink={true}
                        height='300'
                        keepAspectRatio={true}
                        title={image.title}
                        url={image.url}
                      />
                    </LazyLoad>
                    <h3 className='h5 mt-2 text-center'>{image.title}</h3>
                  </div>
                ))}
              </div>
            </>
          )}
          {project.videos && (
            <div className='row'>
              {project.videos.map((video, index) => (
                <div className='col-12' key={index}>
                  <hr />
                  <h2>Video</h2>
                  <div className='embed-responsive embed-responsive-16by9'>
                    <iframe
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen
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
              {project.audios.map((audio, index) => (
                <div className='col-12' key={index}>
                  <hr /> <h2>Audio</h2>
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
      {isModalOpen && (
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
  );
}

export default ArtDetails;
