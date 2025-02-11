import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/choralresume'>Choral Resume</Link></li>
            <li><Link to='/conductingvideos'>Conducting Videos</Link></li>
            <li><Link to='/socialworkresume'>Social Work Resume</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar