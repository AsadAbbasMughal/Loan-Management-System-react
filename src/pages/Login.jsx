import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import supabase from '../lib/Db';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const adminEmail = "admin@example.com";
  const adminPassword = "adminadmin";

  

  const handleSubmit =async (e) =>{
    e.preventDefault()


    if (email === adminEmail && password === adminPassword) {
      toast.success("Login Successful");
      setTimeout(() => {
        navigate('/admin-dashboard');  // Redirect to admin panel
      }, 1000);
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if(error){
      toast.error("Signin Error", error.message )
      console.log("Signin Error", error.message);
      return 
    }
    if(data){
      toast.success("Signin data")
      console.log("Signin data", data);
      // return
    }

    setTimeout(()=>{
      navigate('/user-dashboard')
    }, 1000)
  }

  return (
    <div className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-green-400 to-emerald-500 pt-12">
      
      {/* Left Side: Image */}
      <div className="hidden md:block relative">
        <img
          src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
          alt="Login Visual"
          className="w-full h-full object-cover rounded-l-lg shadow-2xl transform transition duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-3xl md:text-5xl z-10 px-4 text-center">
          🔐 Welcome Back <br /> Loan Management System
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex items-center justify-center px-6 py-12 bg-white bg-opacity-80 backdrop-blur-md rounded-r-lg shadow-xl">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">Login 🔑</h2>
          <p className="text-center text-gray-600 mb-8">Login to access your dashboard 📊</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">📧 Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
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
                onChange={(e)=> setPassword(e.target.value)}
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
              🔓 Login
            </button>
          </form>

          {/* Link to Signup */}
          <p className="text-sm text-center mt-6 text-gray-700">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-emerald-600 font-semibold hover:underline">Create Account ✍️</Link>
          </p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Login;
