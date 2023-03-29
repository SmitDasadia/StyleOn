/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
import { FiChevronRight,FiChevronLeft } from 'react-icons/Fi';


import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div className="relative">
      <div className="carousel">
        
        <img
          className="mmx-auto h-full w-full object-contain"
          src={images[currentImageIndex]}
          alt="carousel-image"
        />
       
      </div>
    </div>
  );
};

export default Carousel;
