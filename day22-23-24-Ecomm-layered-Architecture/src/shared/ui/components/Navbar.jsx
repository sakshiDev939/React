import React from 'react'
import { NavLink } from 'react-router'
import {Box, ShoppingCart} from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex items-center bg-blue-300 gap-5 justify-between py-4 px-10">
      <h1>Logo</h1>

      <div className="flex items-center gap-10 text-xl">
        <NavLink className={({isActive}) => isActive ? "text-pink-400 " : "text-white"} to={"/main"} end >Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-pink-400 " : "text-white"} to={"/main/product"}>Shop</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-pink-400 " : "text-white"} to={"/main/about"}>About</NavLink>
      </div>
      <div className="flex items-center gap-6">

         <NavLink className={({isActive}) => isActive ? "text-pink-400 " : "text-white"} to={"/main/cart"}>
        <ShoppingCart />
         </NavLink>
        <NavLink className={({isActive}) => isActive ? "text-pink-400 " : "text-white"} to={"/main/orders"}>
        <Box />
        </NavLink>
      <button className="px-5 py-1 rounded cursor-pointer text-white bg-red-400">Logout</button>

      </div>
   </div>
  )
}

export default Navbar
