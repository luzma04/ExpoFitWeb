import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io';

function Gallery({ data }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % data.length);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center mt-10 gap-4">
        {data.map((element, i) => (
          <div key={i} onClick={() => setSelectedImage(i)} className="cursor-pointer">
            <img
              src={`/gallery/${element.img}`}
              alt={`Descripción: ${element.alt}`}
              className="w-[300px] h-[250px] object-cover rounded-md shadow-md hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center px-4">
          <button
            onClick={handlePrev}
            className="text-white text-4xl absolute left-4 top-1/2 -translate-y-1/2 z-50"
          >
            <IoIosArrowBack />
          </button>

          <div className="relative">
            <img
              src={`/gallery/${data[selectedImage].img}`}
              alt={`Descripción: ${data[selectedImage].alt}`}
              className="max-w-[90vw] max-h-[90vh] rounded-md shadow-lg z-40"
            />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white text-3xl z-50"
            >
              <IoIosClose />
            </button>
          </div>

          <button
            onClick={handleNext}
            className="text-white text-4xl absolute right-4 top-1/2 -translate-y-1/2 z-50"
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery
