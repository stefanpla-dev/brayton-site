import React from 'react'
import '../styles/Contact.css'
import ContactPageCarousel from './ContactPageCarousel';
import HomeButton from '../components/HomeButton';

function Contact() {
  const email = "example@email.com"

  return (
    <div className="contact-page">
      <div className="contact-text">
        <p>jared.brayton.bollenbacher@gmail.com </p>
        <p>brayton@cgmc.com</p>
        <ContactPageCarousel />
        <HomeButton />
      </div>
    </div>
  )
}

export default Contact