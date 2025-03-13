import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signin from '../Pages/Signin'
import Signup from '../Pages/Signup'
import ProductDetails from '../Pages/ProductDetails'
import Dashboard from '../Pages/Dashboard'
const Navroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
    </Routes>
  )
}

export default Navroutes