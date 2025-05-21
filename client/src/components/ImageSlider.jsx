import React, { useState } from 'react'

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  
    return (
      <div className="image-slider flex flex-col justify-center items-center w-full h-full min-h-[300px]">
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          loading="lazy"
          className="w-full h-[300px] md:h-full object-cover rounded-2xl"
        />
        <div className="flex justify-center mt-4">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl text-white mx-1 cursor-pointer"
            >
              •
            </div>
          ))}
        </div>
      </div>
    );
}
  
export default ImageSlider;
