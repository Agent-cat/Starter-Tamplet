import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleLogout = () => {
    onLogout();
    setShowUserMenu(false);
  };

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center text-xl font-bold">
            Vishnu
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
              }
            >
              Dashboard
            </NavLink>

            {/* User Menu or Auth Buttons */}
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                >
                  <FaUser />
                  <span>{user.name}</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
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
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed top-16 left-0 bottom-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
            }
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>

          {user ? (
            <>
              <div className="border-t pt-4">
                <div className="text-gray-700 mb-2">
                  Signed in as: {user.name}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="border-t pt-4 space-y-2">
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 bg-black text-white rounded-md"
                    : "block px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                }
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 bg-black text-white rounded-md"
                    : "block px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                }
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;