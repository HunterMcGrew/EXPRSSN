import { getFormControlUnstyledUtilityClasses } from '@mui/base';
import { useState } from 'react';
import '../../pages/css/slider.css';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // STYLES for the slide images
  const sliderStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
  };
  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    // backgroundColor: 'red',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].img})`,
  };

  // Styles for the two arrow buttons (LEFT & RIGHT)
  const arrowStyles = {
    left: {
      position: 'absolute',
      top: '50%',
      transform: 'translate(0,-50%)',
      left: '32px',
      fontSize: '45px',
      color: '#fff',
      zIndex: 1,
      cursor: 'pointer',
    },
    right: {
      position: 'absolute',
      top: '50%',
      transform: 'translate(0,-50%)',
      right: '32px',
      fontSize: '45px',
      color: '#fff',
      zIndex: 1,
      cursor: 'pointer',
    },
  };

  // FUNCTIONALITY for the (LEFT & RIGHT) arrow buttons
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Styles for the dots container
  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
  };
  // Styles for the dots as well as hover effect
  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',
  };
  // functionality of clicking the dots
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  // grabbing the title
  const title = slides[currentIndex].name;
  // Title Style
  const titleStyle = {
    fontSize: '200%',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <div style={sliderStyles}>
      <h1 style={titleStyle}>{title}</h1>
      <div style={arrowStyles.left} onClick={goToPrevious}>
        🡨
      </div>
      <div style={slideStyles}></div>
      <div style={arrowStyles.right} onClick={goToNext}>
        🡪
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            className={currentIndex === slideIndex ? 'activeDot' : 'dot'}
            style={dotStyles}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {/* ○ */}_
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
