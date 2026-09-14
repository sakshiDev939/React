import React from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {

    let isAdmin =true;

    if(!isAdmin){
     console.log("hey i m runing...");
     alert("you are not an admin")
     
     return <Navigate to={"/products"} />
    }
  return children ;
}

export default ProtectedRoute
