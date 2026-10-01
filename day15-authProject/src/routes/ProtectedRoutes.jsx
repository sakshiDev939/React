import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../Context/AuthContext'

const ProtectedRoutes = () => {

    const{loggedInUser}= useContext(Auth);
    if(!loggedInUser){
        return <Navigate to={"/"}/>
    } 

  return <Outlet />
}

export default ProtectedRoutes
