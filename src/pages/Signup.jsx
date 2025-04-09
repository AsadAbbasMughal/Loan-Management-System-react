import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import supabase from '../lib/Db.js';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  



  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });



    if (error) {
      toast.error('Signup failed : ' + error.message);
      console.log("Signup error:", error.message);
    } else {
      toast.success('Signup successful!  Check your email to confirm.');
      console.log("Signup data:", data.user.id);

      let uid = data.user.id


      const { error: insertError } = await supabase
    .from('usersData')
    .insert({  
      name: name,
      email: email,
      UID: uid

     })

      // Redirect to login page after successful signup
      setTimeout(() => {
        navigate('/login');
      }, 1000); // 3 seconds delay before redirecting
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-emerald-400 to-green-500 pt-12">
      {/* Left Side: Image */}
      <div className="hidden md:block relative">
        <img
          src="https://img.freepik.com/free-vector/security-system-background_23-2147626787.jpg"
          alt="Sign Up Visual"
          className="w-full h-full object-cover rounded-l-lg shadow-2xl transform transition duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-3xl md:text-5xl z-10 px-4 text-center">
          💼 Welcome to <br /> Loan Management System
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex items-center justify-center px-6 py-12 bg-white bg-opacity-80 backdrop-blur-md rounded-r-lg shadow-xl">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">Create Account 🚀</h2>
          <p className="text-center text-gray-600 mb-8">Join us to manage your loans efficiently 💳</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">👤 Full Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                placeholder="Your Full Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">📧 Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">🔒 Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                placeholder="••••••••"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-lg shadow-md transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Link to Login */}
          <p className="text-sm text-center mt-6 text-gray-700">
            Already have an account?{' '}
            <Link to="/login" className="text-emerald-600 font-semibold hover:underline">Sign In 👈</Link>
          </p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Signup;
