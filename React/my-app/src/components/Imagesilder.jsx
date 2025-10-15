import React, { useState } from 'react';

const ImageSlider = () => {
  const images = [
    'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg',
    'https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg',
    'https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg',
    'https://images.pexels.com/photos/638738/pexels-photo-638738.jpeg',
    'https://images.pexels.com/photos/63330/geese-water-birds-waterfowl-63330.jpeg',
    'https://images.pexels.com/photos/59840/elephant-baby-safari-elephants-africa-59840.jpeg'
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img
        src={images[current]}
        style={{ width: '50%', height: '50%' }}
      />
      <div>
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
