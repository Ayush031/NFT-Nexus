import React from 'react'
import { Outlet } from 'react-router-dom';

import bgvideo from './assets/bgvideo.mp4'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Layout() {
  return (
    <>
      <div className='h-screen scroll-smooth w-full' >
        <video autoPlay loop muted id='video' style={{ opacity: 0.4 }} >
          <source src={bgvideo} type="video/mp4" />
        </video>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout