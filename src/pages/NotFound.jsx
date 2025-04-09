import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-emerald-400 to-green-600 flex items-center justify-center px-4 pt-12">
      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-lg w-full">
        <h1 className="text-6xl font-extrabold text-emerald-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found 😕</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition duration-300"
        >
          ⬅️ Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
