import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import ToursScreen from './pages/ToursScreen'
import AboutScreen from './pages/AboutScreen'
import MoroccoScreen from './pages/MoroccoScreen'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <>404 - Page Not Found</>
  },
  {
    path: "/tours",
    element: <ToursScreen />
  },
  {
    path: "/about-us",
    element: <AboutScreen />
  },
  {
    path: "/morocco",
    element: <MoroccoScreen />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
