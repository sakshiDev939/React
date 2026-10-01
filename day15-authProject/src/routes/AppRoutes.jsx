import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../Layouts/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainLayout from '../layouts/MainLayout'
import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = () => {

let router = createBrowserRouter([
    {
        path:"/",
        element: <AuthLayout />,
        children: [
            {
                path:"",
                element:<LoginPage />,

            },
             {
                path:"Register",
                element:<RegisterPage />
                
            }
        ]
    },
    {
     path:"/main",
     element: <ProtectedRoutes />,
     children:[
        {
            path: "",
            element: <MainLayout />,
        }
     ]
    }
])



  return  <RouterProvider router={router} />
} 

export default AppRoutes
