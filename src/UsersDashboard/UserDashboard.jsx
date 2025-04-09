import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircle, LogOut, Home, Settings } from 'lucide-react';
import supabase from '../lib/Db';

const UserDashboard = () => {
  const [userName, setUserName] = useState('');
  const [loanData, setLoanData] = useState([]);
  const [approvedLoans, setApprovedLoans] = useState(0);
  const [rejectedLoans, setRejectedLoans] = useState(0);
  const [pendingLoans, setPendingLoans] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: currentUserData } = await supabase.auth.getUser();
      console.log(currentUserData);

      if (currentUserData) {
        const { data, error } = await supabase
          .from('usersData')
          .select('name')
          .eq('UID', currentUserData.user.id)
          .single();

        if (error) {
          console.log('Error fetching user data:', error.message);
        } else {
          setUserName(data.name); // Set the fetched name
        }
      } else {
        // If no user is logged in, handle accordingly (e.g., redirect to login page)
        console.log('No user logged in');
      }

      const { data: LoanData, error: LoanError } = await supabase
        .from('LoanData')
        .select('*')
        .eq('UID', currentUserData.user.id)
        // .eq('UID', currentUserData.user.id);

      if (LoanError) {
        console.error('Error fetching loan data:', LoanError.message);
      } else {
        setLoanData(LoanData); // This will now give you all loan data associated with the user

        // Filter loans based on status
        const approved = LoanData.filter(loan => loan.status === 'Approved').length;
        const rejected = LoanData.filter(loan => loan.status === 'Rejected').length;
        const pending = LoanData.filter(loan => loan.status === 'Pending').length;

        setApprovedLoans(approved);
        setRejectedLoans(rejected);
        setPendingLoans(pending);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
        <div className="text-2xl font-bold text-emerald-600">Dashboard 🧑‍💻</div>
        <nav className="space-y-4">
          <Link to="/user-dashboard" className="flex items-center space-x-2 hover:text-emerald-600">
            <Home size={20} /> <span>Dashboard</span>
          </Link>
          <Link to="/loan-requests" className="flex items-center space-x-2 hover:text-emerald-600">
            <UserCircle size={20} /> <span>My Loan Request</span>
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
      <main className="flex-1 p-8">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Welcome {userName} 👋</h1>
          <div className="flex items-center space-x-2">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-emerald-500"
            />
            <span className="font-semibold">{userName}</span>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Active Loans</h2>
            <p className="text-2xl font-bold text-emerald-600 mt-2">{loanData.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Approved Loans</h2>
            <p className="text-2xl font-bold text-emerald-600 mt-2">{approvedLoans}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Rejected Loans</h2>
            <p className="text-2xl font-bold text-red-600 mt-2">{rejectedLoans}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Pending Requests</h2>
            <p className="text-2xl font-bold text-yellow-500 mt-2">{pendingLoans}</p>
          </div>
        </div>

        {/* Apply for New Loan Box */}
        <div className="mt-10 bg-emerald-100 p-8 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-emerald-800">Need More Support?</h2>
            <p className="text-gray-700 mt-2">You can apply for a new loan type based on your needs.</p>
          </div>
          <Link
            to="/new-loan"
            className="mt-4 md:mt-0 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Apply for New Loan
          </Link>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard
