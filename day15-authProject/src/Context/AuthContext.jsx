import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({children}) => {

    const[registeredUsers, setRegisteredUsers] =useState(
        JSON.parse(localStorage.getItem('registeredUsers')) || []);


    const [ loggedInUser,setLoggedInUser] = useState(
        JSON.parse(localStorage.getItem("loggedInUser")) 
    );


  
  console.log("registered Users->",registeredUsers);
  console.log(" loggedIn User->",loggedInUser);




    return( <Auth.Provider value={{registeredUsers, setRegisteredUsers,loggedInUser , setLoggedInUser}} >{children}</Auth.Provider>
)}