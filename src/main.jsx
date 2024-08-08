import React, { createContext, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider  } from 'react-router-dom'
import { registerAction } from './register/register.jsx'

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
    element:<Register/>,
    action:registerAction
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />} >
      <RouterProvider router={router}/>
    </Suspense>
  </React.StrictMode>,
)
