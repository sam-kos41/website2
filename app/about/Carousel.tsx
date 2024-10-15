import { useState } from 'react';

export default function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  if (!images.length) {
    return <p>No images available.</p>;
  }

  return (
    <div className="carousel relative">
      <button onClick={prevSlide} className="absolute left-0 bg-gray-200 p-2 rounded-full">
        ←
      </button>
      <img src={images[currentIndex]} alt={`carousel-${currentIndex}`} className="carousel-image w-full" />
      <button onClick={nextSlide} className="absolute right-0 bg-gray-200 p-2 rounded-full">
        →
      </button>
    </div>
  );
}
