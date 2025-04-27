import React from "react";
import Slider from "react-slick"; // Importing slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselLogo = ({ slides }) => {
  // Slick settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // auto-scroll every 5 seconds
    arrows: false, // Enable navigation arrows
    dots: true, // Enable dots for navigation
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full">
            <div className="flex items-center justify-center ">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full max-h-[70dvh]" // Ensure image fits properly
              />
              <div className="absolute text-white text-lg font-bold p-4">
                {slide.title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselLogo;
