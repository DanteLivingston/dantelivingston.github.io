import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';
import projects from '../config/projects';
import PageTitle from './PageTitle';
import strings from '../config/strings';
import { useHistory } from 'react-router-dom';
import Image from './Image';

function Home() {
  let history = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const filteredProjects = projects.filter(({ type }) => type !== 'inspiration');

  const firstDigitalImage = filteredProjects.find(({ type }) => type === 'digital').images[0];
  const firstTraditionalImage = filteredProjects.find(({ type }) => type === 'traditional')
    .images[0];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === filteredProjects.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? filteredProjects.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <PageTitle>{strings.home}</PageTitle>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={filteredProjects}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {filteredProjects
          .filter(({ type }) => type !== 'inspiration')
          .map((project) => {
            const firstImage = filteredProjects[0].images[0];
            return (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={project.slug}
              >
                <Link to={`/art-details/${project.slug}`}>
                  <Image
                    hasLink={true}
                    url={firstImage.url}
                    title={firstImage.title}
                    height='400'
                    keepAspectRatio={true}
                  />
                </Link>
                <CarouselCaption
                  captionHeader={project.title}
                  captionText={project.shortDescription}
                />
              </CarouselItem>
            );
          })}
        <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
        <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
      </Carousel>
      <hr className='border-secondary my-4' />
      <div className='row'>
        <div className='col-6'>
          <div className='card'>
            <Image
              className='card-img-top'
              hasLink={true}
              keepAspectRatio={true}
              onClick={() => history.push('digital-art')}
              title={firstDigitalImage.title}
              url={firstDigitalImage.url}
            />
            <div className='card-body'>
              <h5 className='card-title'>
                <Link to='/digital-art'>{strings.digital}</Link>
              </h5>
              <p className='card-text'>{strings.digitalDescription}</p>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='card'>
            <Image
              className='card-img-top'
              hasLink={true}
              keepAspectRatio={true}
              onClick={() => history.push('traditional-art')}
              title={firstTraditionalImage.title}
              url={firstTraditionalImage.url}
            />
            <div className='card-body'>
              <h5 className='card-title'>
                <Link to='/traditional-art'>{strings.traditional}</Link>
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
