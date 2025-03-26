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

function shuffleArray(array) {
    return array
    .map((item)=> ({item, sort: Math.random() })) // Assign random sort values
    .sort((a,b)=> a.sort - b.sort) // Sort by those values.
    .map(({item}) => item); // Extract shuffled item
}


function ImageCarousel() {
    const [shuffledImages, setShuffledImages] = useState(shuffleArray(images))
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect (() => {
        const interval = setInterval (() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === shuffledImages.length - 1) {
                    setShuffledImages(shuffleArray(images)); //Reshuffle for next cycle
                    return 0; //Reset index
                }
                return prevIndex + 1;
            });
        }, 8000);    
        return () => clearInterval(interval);
    }, [shuffledImages]);

  return (
    <div className ="image-carousel">
        <img src={shuffledImages[currentIndex]} className="carousel-image" />
    </div>
  );
}

export default ImageCarousel