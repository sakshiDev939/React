import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="bg-blue-300 rounded p-5 flex items-center justify-between">
      <div>logo</div>
      <div className="flex gap-10 text-xl">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Products"}>Products</NavLink>

      </div>
      <button>login</button>
    </div>
  )
}

export default Navbar
