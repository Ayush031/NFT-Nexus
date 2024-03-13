import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/ecommerce' element={<Ecommerce />} />
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/community' element={<Community />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default Layout