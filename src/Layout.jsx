import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Ecommerce from './pages/Ecommerce';
import Community from './pages/Community';
import Product from './pages/Product';
import NoPage from './pages/NoPage';

import bgvideo from './assets/bgvideo.mp4'

function Layout() {
  return (
    <>
      <div className='h-screen scroll-smooth w-full' >
        <BrowserRouter>
          <video autoPlay loop muted id='video' style={{ opacity: 0.5 }} >
            <source src={bgvideo} type="video/mp4" />
          </video>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/merchandise' element={<Ecommerce />} />
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/community' element={<Community />} />
            {/* <Route path='/merchandise/product/:productName' element={<Product />} /> */}
            <Route path='*' element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default Layout