import React, { useState, useEffect } from 'react';
import '../styles/ImageCarousel.css';

const images = [
    '/src/assets/brayton-1.jpg',
    '/src/assets/brayton-2.jpg',
    '/src/assets/brayton-4.jpg',
    '/src/assets/brayton-5.jpg',
    '/src/assets/brayton-6.jpg',
    '/src/assets/brayton-7.jpg',
    '/src/assets/brayton-8.jpg',
];

function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect (() => {
        const interval = setInterval (() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

  return (
    <div className ="image-carousel">
        <img src={images[currentIndex]} className="carousel-image" />
    </div>
  );
}

export default ImageCarousel