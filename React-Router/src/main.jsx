import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter ,   RouterProvider} from 'react-router-dom'
import Contact from './component/Contact.jsx'
import About from './component/About.jsx'
import ErrorPage from './error-page.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([ 
  { 
    path : '/' , 
    element : <App />
  }, { 
    path : '/about' , 
    element : <About /> 
  }, 
  { 
    path : '/contact',
    element : <Contact /> 
  },
  { 
    path : '*',
    element : <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
