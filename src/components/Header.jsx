import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { FaUser } from 'react-icons/fa'; // React icons se human emoji

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-emerald-600 flex items-center space-x-1">
            <span>💸</span>
            <span>LoanPage</span>
          </Link>

          {/* Human icon on Mobile screen (visible only on small screens) */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-emerald-600 transition"
            >
              <FaUser size={20} />
            </button>
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="text-gray-700 font-medium hover:text-emerald-600 transition">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 font-semibold transition"
            >
              Sign Up
            </Link>

            {/* Desktop Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 font-semibold hover:text-emerald-600 transition"
              >
                <FaUser className="mr-1" />
                <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
                    Settings
                  </Link>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
          <Link to="/login" className="block text-gray-700 font-medium hover:text-emerald-600">
            Login
          </Link>
          <Link
            to="/signup"
            className="block text-white bg-emerald-600 px-6 py-2 rounded-md font-semibold text-center"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Mobile Dropdown */}
      {dropdownOpen && (
        <div className="md:hidden absolute right-4 top-16 bg-white rounded-lg shadow-md w-40 z-50">
          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
            Profile
          </Link>
          <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
            Settings
          </Link>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
