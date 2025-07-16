import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import ToursScreen from './pages/ToursScreen'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <>404 - Page Not Found</>
  },
  {
    path:"/tours",
    element:<ToursScreen />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
