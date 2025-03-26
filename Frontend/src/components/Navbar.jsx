import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { Navconstants } from '../constants/Navconstant';


const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <NavLink to="/" className="flex font-[fairplay] text-2xl items-center font-bold text-white">
            Iconic <span className='text-[#D4B678]'>OceanEdge</span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-4">
            {Navconstants.map((navItem, index) => (
              <NavLink
                key={index}
                to={navItem.to}
                className={({ isActive }) =>
                  isActive 
                    ? "text-white font-medium" 
                    : "text-gray-200 hover:text-white transition-colors"
                }
              >
                {navItem.title}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 text-white hover:text-gray-200"
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
                      ? "px-4 py-2 font-medium bg-[#cd754a] text-white rounded-md"
                      : "px-4 py-2 font-medium bg-[#e87e49cf] text-white rounded-md hover:bg-[#d86830c6]"
                  }
                >
                  Sign in
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 bg-white text-black rounded-md"
                      : "px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-white/10"
                  }
                >
                  Sign up
                </NavLink>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } fixed top-20 left-0 bottom-0 bg-black w-full shadow-xl transform transition-all duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {Navconstants.map((navItem, index) => (
            <NavLink
              key={index}
              to={navItem.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium px-3 py-2 rounded-md bg-gray-800"
                  : "text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition-colors duration-200"
              }
              onClick={() => setIsOpen(false)}
            >
              {navItem.title}
            </NavLink>
          ))}

          {user ? (
            <>
              <div className="border-t border-gray-700 pt-4">
                <div className="text-gray-300 mb-2 px-3">
                  Signed in as: {user.name}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="border-t border-gray-700 pt-4 space-y-2">
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 bg-[#cd754a] text-white rounded-md"
                    : "block px-4 py-2 bg-[#e87e49cf] text-white rounded-md hover:bg-[#d86830c6] transition-colors duration-200"
                }
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 bg-white text-black rounded-md"
                    : "block px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-white/10 transition-colors duration-200"
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