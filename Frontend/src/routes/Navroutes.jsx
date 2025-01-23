import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import Signin from '../Pages/Signin'
import Signup from '../Pages/Signup'
const Navroutes = () => {
  return (
    <Routes  >
        <Route path="/" element={<Home />} />
        {/* <Route path="/Student" element={<Student />} />
        <Route path="/contest-data" element={<ContestData />} />
        <Route path="/heatmap" element={<Heatmap/>} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default Navroutes