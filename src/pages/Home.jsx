import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 pt-16">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: "url('https://example.com/your-image.jpg')", // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">Welcome to LoanPage</h1>
            <p className="mt-4 text-lg sm:text-xl">
              Your trusted partner for managing loans and finances with ease.
            </p>
            <Link
              to="/signup"
              className="mt-6 inline-block bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* User-Friendly Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-emerald-600">Manage Your Loans</h2>
            <p className="mt-2 text-gray-600">
              Keep track of your loans and payments at a glance.
            </p>
            <Link
              to="/loans"
              className="mt-4 inline-block bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              View Loans
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-emerald-600">Apply for a Loan</h2>
            <p className="mt-2 text-gray-600">
              Need a loan? Apply easily with just a few steps.
            </p>
            <Link
              to="/apply"
              className="mt-4 inline-block bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Apply Now
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-emerald-600">Support</h2>
            <p className="mt-2 text-gray-600">
              Need help? Reach out to our support team for assistance.
            </p>
            <Link
              to="/support"
              className="mt-4 inline-block bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
