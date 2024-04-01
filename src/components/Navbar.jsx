import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-cyan-300 text-lg font-bold animate-pulse">
              NJ
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-cyan-300 hover:text-white hover:border-b-2 border-cyan-300 ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cyan-300 hover:text-white hover:border-b-2 border-cyan-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-cyan-300 hover:text-white hover:border-b-2 border-cyan-300">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cyan-300 hover:text-white hover:border-b-2 border-cyan-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-cyan-300 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Animation added here */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 transition-all duration-500 ease-in-out transform origin-top">
          <Link to="/" className="text-cyan-300 block hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-cyan-300 block hover:text-white ">
            About
          </Link>
          <Link to="/portfolio" className="text-cyan-300 block hover:text-white">
            Work
          </Link>
          <Link to="/contact" className="text-cyan-300 block hover:text-white">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
