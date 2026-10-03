import React from 'react'
import { NavLink } from 'react-router'
import {LogOut} from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <h1>SkyDart</h1>

      <div className=" flex gap-8" >
        <NavLink className={({isActive}) => {
            return isActive ? "text-yellow-500" : "";
        }} to={"/main"} end >Home</NavLink>

        <NavLink className={({isActive}) => {
            return isActive ? "text-yellow-500" : "";
        }} to={"/main/shop"}>Shop</NavLink>

        <NavLink className={({isActive}) => {
            return isActive ? "text-yellow-500" : "";
        }} to={"/main/about"}>About</NavLink>
      </div>

      <div className="flex gap-8 items-center">
        
        <h1>Welcome to <strong className="text-yellow-500" >SkyDart</strong> </h1>
        <button>Cart</button>

        <LogOut className="cursor-pointer" size={18} />
      </div>
    </div>
  )
}

export default Navbar
