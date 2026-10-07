import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'


const MaiProtected = () => {

let {isAuthenticated, user, isLoading} = useSelector((store)=> store.auth);

if(isLoading) return <h1>Loading state</h1>

if(!user){
  return <Navigate to={"/"} />;
}

  return  <Outlet />
}

export default MaiProtected
