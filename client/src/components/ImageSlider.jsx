import React, { useState } from 'react'

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  
    return (
      <div className="image-slider flex flex-col justify-center items-center w-full h-full min-h-[300px]">
        <div
          className="w-full h-[300px] md:h-full bg-center bg-cover rounded-2xl"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
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
