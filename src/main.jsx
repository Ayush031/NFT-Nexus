import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Ecommerce from './pages/Ecommerce';
import Community from './pages/Community';
import NoPage from './pages/NoPage';
import Layout from './Layout';
import Section1 from './components/Section1';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='/' element={<Section1 />} />
      <Route path='/nftnexus' element={<Section1 />} />
      <Route path='merchandise' element={<Ecommerce />} />
      <Route path='marketplace' element={<Marketplace />} />
      <Route path='community' element={<Community />} />
      {/* <Route path='/merchandise/product/:productName' element={<Product />} /> */}
      < Route path='*' element={< NoPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
