import {useState} from 'react';
import './Carousel.css'

const Carousel = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(
    require.context("../assets/images/slideshow", false, /\.(png|jpe?g|svg)$/)
  );

  const [index, setIndex] = useState(0);
  
  const slideForward = () => {
    setIndex(index === images.length-1 ? 0 : index + 1);
  }

  const slideBackward = () => {
    setIndex(index === 0 ? images.length-1 : index - 1);
  }
  
  return (
    <>
      <div id="slideshow">
        <img src={images[index]} alt="slideshow" />
        <p id="forward-arrow" onClick={slideForward}>&gt;</p>
        <p id="backward-arrow" onClick={slideBackward}>&lt;</p>
      </div>
    </>
  );
};

export default Carousel;