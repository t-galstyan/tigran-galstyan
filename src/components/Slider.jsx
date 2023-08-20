import React, { useEffect, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useOnScreen from '../hooks/useOnScreen';

const Slider = () => {
  const [autoPlay, setAutoPlay] = useState(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setAutoPlay(true);
    }
  }, [isVisible]);

  return (
    <div ref={ref}>
      <Carousel
        autoPlay={autoPlay}
        infiniteLoop
        showThumbs={false}
        stopOnHover
        showArrows
        emulateTouch
        swipeable
        showStatus={false}
        Interval={4000}
      >
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/01.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/02.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/03.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/04.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/05.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/06.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/07.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/08.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/09.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/10.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/11.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/12.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/13.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/14.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/15.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/16.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/17.png')} alt="" />
        </div>
        <div className="slider-item">
          <img src={require('../assets/images/special-pictures/18.png')} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
