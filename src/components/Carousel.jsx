import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next item
  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Function to go to the previous item
  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative w-full   overflow-hidden">
      <div className="flex items-center justify-center relative">
        {/* Previous Button */}
        <button
          className="absolute left-0 p-2 bg-gray-800 text-white rounded-full opacity-50 hover:opacity-100"
          onClick={prevItem}
        >
          &#10094;
        </button>

        {/* Carousel Item */}
        <div className="w-full">
          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].alt}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-4 text-white text-center">
            <h3 className="text-xl">{items[currentIndex].title}</h3>
            <p>{items[currentIndex].description}</p>
          </div>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-0 p-2 bg-gray-800 text-white rounded-full opacity-50 hover:opacity-100"
          onClick={nextItem}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
