import React, { createContext, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider  } from 'react-router-dom'

// page imports//
const App = lazy(()=>import('./App.jsx'))
const Contact = lazy(()=>import('./contact/contact.jsx'))
const Register = lazy(()=>import('./register/register.jsx'))
const Loading = lazy(()=>import('./loading/loading.jsx'))

import './index.css'
// import Layout from './Layout.js'


export const screenWidth = createContext()

const router = createBrowserRouter([
  {
    path:"/", 
    element:<App/>
  },
  {
    path:"/contact", 
    element:<Contact/>
  },
  {
    path:"/register", 
    element:<Register/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />} >
      <RouterProvider router={router}/>
    </Suspense>
  </React.StrictMode>,
)
