import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      
      <NavLink to="/" className="text-xl font-bold">
        Code Chef
      </NavLink>

      
      <div className="flex items-center space-x-8">
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/Student" 
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
          }
        >
          Councling Students
        </NavLink>
        <NavLink 
          to="/contest-data"
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
          }
        >
          Contest Data
        </NavLink>
        <NavLink 
          to="/heatmap"
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
          }
        >
          Heatmaps
        </NavLink>
        
      </div>

      <div className="flex items-center space-x-4">
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            isActive 
              ? "px-4 py-2 bg-black text-white rounded-md"
              : "px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          }
        >
          Sign in
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive 
              ? "px-4 py-2 bg-black text-white rounded-md"
              : "px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          }
        >
          Sign up
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar