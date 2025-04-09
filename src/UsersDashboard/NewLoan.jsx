import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, UserCircle, Settings, LogOut } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import supabase from '../lib/Db';

const NewLoan = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('Pending'); // Default status
  const [date, setDate] = useState(new Date().toISOString()); // Current date

  const handleLoanData = async (e) => {
    e.preventDefault();

    // Step 1: Get the current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      toast.error("User not authenticated ❌");
      console.error("Auth error:", userError?.message);
      return;
    }

    console.log("Current User ID:", user.id); // Just to check

    // Step 2: Insert loan data
    const { error, data } = await supabase
      .from('LoanData')
      .insert({
        name,
        email,
        number,
        address,
        amount,
        type,
        UID: user.id, // 👈 current user ka UID
        date,
        status,
      })
      .select();

    if (error) {
      toast.error("Loan submission failed 😞");
      console.error("Submission error:", error.message);
      return;
    }

    if (data) {
      toast.success("Loan Application Submitted Successfully! ✅");
      console.log("Loan submitted", data);

      // Clear form
      setName('');
      setEmail('');
      setNumber('');
      setAddress('');
      setAmount('');
      setType('');
      setStatus('Pending');
      setDate(new Date().toISOString());
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 text-gray-800 pt-20">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md p-6 space-y-6 md:space-y-8">
        <div className="text-2xl font-bold text-emerald-600">Dashboard 🧑‍💻</div>
        <nav className="space-y-4">
          <Link to="/user-dashboard" className="flex items-center space-x-2 hover:text-emerald-600">
            <Home size={20} /> <span>Dashboard</span>
          </Link>
          <Link to="/loan-requests" className="flex items-center space-x-2 hover:text-emerald-600">
            <UserCircle size={20} /> <span>My Loan Requests</span>
          </Link>
          <Link to="/new-loan" className="flex items-center space-x-2 hover:text-emerald-600">
            <Settings size={20} /> <span>New Loan</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-2 hover:text-emerald-600">
            <Settings size={20} /> <span>Profile</span>
          </Link>
          <Link to="/logout" className="flex items-center space-x-2 hover:text-red-500 mt-8">
            <LogOut size={20} /> <span>Logout</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800">Apply for New Loan</h1>
          <div className="mt-6">
            <p className="text-lg text-gray-600">Fill out the form below to apply for a new loan:</p>

            <form className="mt-4 space-y-6" onSubmit={handleLoanData}>
              {/* Personal Info */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-700">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-2 p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-700">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="mt-2 p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-2 p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-700">Address</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="mt-2 p-3 border border-gray-300 rounded-lg"
                    rows="3"
                    required
                  />
                </div>
              </div>

              {/* Loan Info */}
              <div className="space-y-4 mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">Loan Details</h2>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-700">Loan Amount</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter loan amount"
                    className="mt-2 p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-700">Loan Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="mt-2 p-3 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="personal">Personal Loan</option>
                    <option value="home">Home Loan</option>
                    <option value="car">Car Loan</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                >
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </main>
    </div>
  );
};

export default NewLoan;
