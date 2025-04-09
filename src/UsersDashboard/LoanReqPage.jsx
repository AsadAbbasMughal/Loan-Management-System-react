import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Corrected imports
import supabase from '../lib/Db';



const getStatusColor = (status) => {
  switch (status) {
    case 'Approved':
      return 'text-green-600';
    case 'Pending':
      return 'text-yellow-500';
    case 'Rejected':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
};

const LoanReqPage = () => {
  const [loanData, setLoanData] = useState([]); 

  useEffect(()=>{
    const fetchLoanData = async () => {

      const { data: { user } } = await supabase.auth.getUser()

      const { data, error } = await supabase
        .from('LoanData')
        .select('*')
        .eq('UID', user.id)

      if (error) {
        console.error("Error fetching loan data:", error);
      } else {
        setLoanData(data); // Set fetched loan data into state
      }
    };

    fetchLoanData();
  }, []);



  return (
    <div className="flex min-h-screen bg-gray-100 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
        <div className="text-2xl font-bold text-emerald-600">Dashboard 🧑‍💻</div>
        <nav className="space-y-4">
            
          <Link to="/user-dashboard" className="flex items-center space-x-2 hover:text-emerald-600">
            <FaHome size={20} /> <span>Dashboard</span>
          </Link>
          <Link to="/loan-requests" className="flex items-center space-x-2 hover:text-emerald-600">
            <FaUser size={20} /> <span>My Loan Requests</span>
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
      <div className="flex-1 p-8 pt-20">
        {/* Heading + New Loan Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">My Loan Requests</h1>
          <Link
            to="/new-loan"
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            + New Loan
          </Link>
        </div>

        {/* Loan Request Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="py-3 px-6">Loan ID</th>
                <th className="py-3 px-6">Amount</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Requested Date</th>
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan) => (
                <tr key={loan.id} className="border-t hover:bg-gray-50 transition">
                  <td className="py-3 px-6">{loan.id}</td>
                  <td className="py-3 px-6">{loan.amount}</td>
                  <td className={`py-3 px-6 font-medium ${getStatusColor(loan.status)}`}>
                    {loan.status}
                  </td>
                  <td className="py-3 px-6">{loan.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoanReqPage;
