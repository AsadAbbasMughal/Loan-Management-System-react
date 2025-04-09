import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'; 

const UserProfile = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6 fixed h-full">
        <div className="text-2xl font-bold text-emerald-600">Dashboard 🧑‍💻</div>
        <nav className="space-y-4">
          <Link to="/user-dashboard" className="flex items-center space-x-2 hover:text-emerald-600">
            <FaHome size={20} /> <span>Dashboard</span>
          </Link>
          <Link to="/loan-requests" className="flex items-center space-x-2 hover:text-emerald-600">
            <FaUser size={20} /> <span>My Loan Request</span>
          </Link>
          <Link to="/new-loan" className="flex items-center space-x-2 hover:text-emerald-600">
            <FaCog size={20} /> <span>New Loan</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-2 hover:text-emerald-600">
            <FaCog size={20} /> <span>Profile</span>
          </Link>
          <Link to="/logout" className="flex items-center space-x-2 hover:text-red-500 mt-8">
            <FaSignOutAlt size={20} /> <span>Logout</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 pt-16 ml-64">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          {/* Profile Header */}
          <div className="flex items-center space-x-4 mb-8">
            <img
              src="https://via.placeholder.com/150"
              alt="User Profile"
              className="w-24 h-24 rounded-full border-4 border-emerald-600"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-xl text-gray-600">john.doe@example.com</p>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-lg text-gray-700">Phone:</span>
              <span className="text-lg text-gray-600">+1 234 567 890</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-700">Address:</span>
              <span className="text-lg text-gray-600">1234 Main St, Cityville</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-700">Date of Birth:</span>
              <span className="text-lg text-gray-600">January 1, 1990</span>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
