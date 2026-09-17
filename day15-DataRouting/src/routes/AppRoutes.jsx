import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'

const AppRoutes = () => {    

  let router = createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/About",
        element:<About />
    },
    {
        path:"/Services",
        element:<Services />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes;
