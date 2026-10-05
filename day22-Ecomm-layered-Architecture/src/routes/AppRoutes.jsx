import React, { useEffect } from 'react'
import MainLayout from '../app/layout/MainLayout';
import PublicProtected from './protected/PublicProtected';
import AuthLayout from '../app/layout/AuthLayout';
import LoginPage from '../features/auth/ui/pages/LoginPage';
import RegisterPage from '../features/auth/ui/pages/RegisterPage';
import MaiProtected from './protected/MaiProtected';
import HomePage from '../shared/ui/pages/homePage';
import ProductPage from '../features/products/ui/pages/ProductPage';
import CartPage from '../features/cart/ui/pages/CartPage';
import OrderPage from '../features/roders/ui/pages/OrderPage';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { useDispatch } from 'react-redux';
import { hydrateUser } from '../features/auth/api/authApi';
import { addUser } from '../features/auth/state/authSlice';
import { hydrateUserAction } from '../features/auth/state/authAction';

const AppRoutes = () => {

    let dispatch = useDispatch();

  useEffect(()=> {
    ( ()=> {
        try {
           dispatch(hydrateUserAction());
        } catch (error) {
            console.log("error in hydration..", error)
        }
    })()
  },[]);


 let router = createBrowserRouter([
    {
        path: "/",
        element: <PublicProtected />,
        children:[
            {
                path:"",
                element:<AuthLayout />,
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
        ],
    },
    {
       path:"/main",
       element:<MaiProtected />,
       children:[
        {
            path:"",
            element:<MainLayout />,
            children:[
                {
                    path:"",
                    element:<HomePage />,
                },
                {
                    path:"product",
                    element:<ProductPage />,
                },
                {
                    path:"cart",
                    element:<CartPage />,
                },
                {
                    path:"order",
                    element:<OrderPage />,
                },
            ]
        }
       ] 
    },
 ]);



  return <RouterProvider  router={router}/>;
}

export default AppRoutes
