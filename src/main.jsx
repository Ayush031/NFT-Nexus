import React from 'react'
import ReactDOM from 'react-dom/client'

import Layout from './Layout.jsx'
import Trade from './components/Trade.jsx'
import Marketplace from './components/Marketplace.jsx'
import Community from './components/Community.jsx'
// import  from './components/'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/trade',
        element: <Trade />,
      },
      {
        path: '/marketplace',
        element: <Marketplace />,
      },
      {
        path: '/community',
        element: <Community />,
      },
    ]
  },
  {}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
