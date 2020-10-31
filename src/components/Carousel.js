import {
  Carousel as ReactStrapCarousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <ReactStrapCarousel
      activeIndex={activeIndex}
      interval={10000}
      next={next}
      previous={previous}
      className='shadow-md'
      pause='hover'
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {items
        ?.filter(({ type }) => type !== 'inspiration')
        ?.map((project) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={project.slug}
            >
              <Link to={`/art-details/${project.slug}`}>
                <Image
                  hasLink={true}
                  url={project.splashImageUrl || project.images[0].url}
                  title={project.title}
                  height='400'
                  keepAspectRatio={true}
                />
              </Link>
              <CarouselCaption
                captionHeader={project.title}
                captionText={project.shortDescription ?? ''}
              />
            </CarouselItem>
          );
        })}
      <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
      <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
    </ReactStrapCarousel>
  );
}

export default Carousel;
