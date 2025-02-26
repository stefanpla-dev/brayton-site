import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeButton.css';

function HomeButton() {
  return (
    <div className="home-button-container">
        <Link to="/" classNAme="home-button">Home</Link>
    </div>
  );
}

export default HomeButton