import React, { useEffect }from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import ChoralResume from './components/ChoralResume';
import SocialWorkResume from './components/SocialWorkResume';
import ConductingVideos from './components/ConductingVideos';
import Contact from './components/Contact';
import './App.css'

function App() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname ==='/') {
      document.body.classList.add('background-visible');
    } else {
      document.body.classList.remove('background-visible');
    }
  }, [location.pathname]);

  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<div className='background-image'/>} />
            <Route path='/about' element={<About />} />
            <Route path='/choralresume' element={<ChoralResume />} />
            <Route path='/conductingvideos' element={<ConductingVideos />} />
            <Route path='/socialworkresume' element={<SocialWorkResume />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
  )
}

export default App
