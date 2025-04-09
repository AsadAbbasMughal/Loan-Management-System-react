import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-6 mt-10 w-full">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-emerald-600 flex items-center space-x-1 mb-6 sm:mb-0 w-full sm:w-auto text-center sm:text-left">
            <span>💸</span>
            <span>LoanPage</span>
          </Link>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center sm:justify-start space-x-6 mt-4 sm:mt-0 w-full sm:w-auto text-center sm:text-left">
            <Link to="/about" className="text-gray-700 font-medium hover:text-emerald-600 transition">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 font-medium hover:text-emerald-600 transition">
              Contact Us
            </Link>
            <Link to="/privacy" className="text-gray-700 font-medium hover:text-emerald-600 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-700 font-medium hover:text-emerald-600 transition">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center mt-4 space-x-6 w-full text-center">
          <Link to="/" className="text-gray-700 hover:text-emerald-600">
            <span className="sr-only">Facebook</span>
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="/" className="text-gray-700 hover:text-emerald-600">
            <span className="sr-only">Twitter</span>
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/" className="text-gray-700 hover:text-emerald-600">
            <span className="sr-only">Instagram</span>
            <i className="fab fa-instagram"></i>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-gray-500 w-full">
          <p>© 2025 LoanPage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
