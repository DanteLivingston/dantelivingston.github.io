import { useParams } from 'react-router-dom';
import projects from '../config/projects';
import PageTitle from './PageTitle';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import LazyLoad from 'react-lazyload';
import Image from './Image';

function ArtDetails() {
  let { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const imageLength = project.images.length;
  return (
    <>
      <PageTitle>{project.title}</PageTitle>
      <div className='row'>
        <div className='col-4'>
          <blockquote dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <div className='col-8'>
          <div className='row'>
            {project.images.map((image, index) => (
              <div
                className='col-sm-4 cursor-pointer'
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
                {image.title}
              </div>
            ))}
          </div>
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
