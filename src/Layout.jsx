import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Ecommerce from './pages/Ecommerce';
import Community from './pages/Community';
import NoPage from './pages/NoPage';


function Layout() {
  return (
    <>
      <div className='h-screen scroll-smooth w-full' >
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/merchandise' element={<Ecommerce />} />
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/community' element={<Community />} />
            {/* <Route path='*' element={<NoPage />} /> */}
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default Layout