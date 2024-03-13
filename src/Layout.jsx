import React from 'react'

import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Section1 from './components/Section1.jsx'

function App() {
  return (
    <>
      <div className='h-screen' >
        <Navbar />
        <Section1 />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App