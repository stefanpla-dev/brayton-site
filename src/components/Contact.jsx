import React from 'react'
import '../styles/Contact.css'
import HomeButton from '../components/HomeButton';

function Contact() {
  const email = "example@email.com"

  return (
    <div className="contact-page">
      <div className="contact-text">
        <h3>Contact Me</h3>
        <p>I'd love to hear from you! Click the button below to send me an email.</p>
        <a href={`mailto:${email}`} className="email-button">Email Me</a>
        <HomeButton />
      </div>
    </div>
  )
}

export default Contact