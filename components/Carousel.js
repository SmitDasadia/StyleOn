/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    const use = async () => {
      await import('tw-elements').default;
    };
    use();
  }, []);

  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide>
        <div
          className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none min-h-screen"
            data-te-carousel-item
            data-te-carousel-active>
            <img
              src="https://img.freepik.com/premium-vector/informational-flat-banner-summer-sale-lettering_93633-277.jpg?w=900"
              className="block w-full"
              alt="Wild Landscape" />
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="block w-full"
              alt="Camera" />
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="block w-full"
              alt="Exotic Fruits" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel