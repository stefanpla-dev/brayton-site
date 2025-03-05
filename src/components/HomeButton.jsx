import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeButton.css';

function HomeButton() {
  return (
    <div className="home-button-container">
        <Link to="/" className="home-button">
          <span>Home</span>
        </Link>
    </div>
  );
}

export default HomeButton