import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import Authlayout from '../layout/Authlayout'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'


const AppRoutes = () => {

let router = createBrowserRouter([
    {
        path:"/",
        element:<Authlayout />,
        children:[
            {
                path:"",
                element:<LoginPage />,
            },
            {
                path:"register",
                element:<RegisterPage />,
            },
        ],
    },
    {
       path:"/main",
       element:<MainLayout />,
       children:[
        {
            path:"",
            element:<HomePage />,
        },
       ] ,
    },
    
]);

  return <RouterProvider router={router} />
}

export default AppRoutes
