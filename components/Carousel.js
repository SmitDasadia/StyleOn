/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
import { FiChevronRight, FiChevronLeft } from 'react-icons/Fi';


import React, { useState, useEffect } from 'react';
import Image from 'next/image'
const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex + 1)
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="relative">
      <div className="carousel">
        <Image src="/banner.jpg" alt='banner' width="0"
          height="0"
          sizes="100vw"
          className="min-h-scree w-auto" />

      </div>
    </div>
  );
};

export default Carousel;
