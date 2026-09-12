import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    
    <nav className="flex bg-blue-300 p-2 items-center justify-between mb-4">
      <h1>Logo</h1>
   <div className="flex items-center gap-10 justify-between">
   <NavLink to={"/"}>Home</NavLink>
   <NavLink to={"/About"}>About</NavLink>
   <NavLink to={"/Contact"}>Contact</NavLink>
   </div>
   <button>Login</button>
  </nav>
  )
}

export default Navbar
