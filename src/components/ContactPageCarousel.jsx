import React, { useState, useEffect } from 'react';
import '../styles/ContactPageCarousel.css';

const images = [
    '/src/assets/contact-1.jpg',
    '/src/assets/contact-2.jpg',
    '/src/assets/contact-3.jpg',
    '/src/assets/contact-4.jpg',
    '/src/assets/contact-5.jpg',
    '/src/assets/contact-6.jpg',
    '/src/assets/contact-7.jpg',
    '/src/assets/contact-8.jpg',
    '/src/assets/contact-9.jpg'
];

function ContactPageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect (() => {
        const interval = setInterval (() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);
    
        return () => clearInterval(interval);
    }, []);
    
    return (
    <div className ="contact-image-carousel">
        <img src={images[currentIndex]} className="carousel-image" />
    </div>
    );
}

export default ContactPageCarousel




