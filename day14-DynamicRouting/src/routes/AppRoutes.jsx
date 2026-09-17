import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import { Route, Routes } from 'react-router'
import ProductDetail from '../pages/ProductDetail'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<ProtectedRoute>
            <About />
        </ProtectedRoute>} />
        <Route path="/Products" element={<Products />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}
 
export default AppRoutes
