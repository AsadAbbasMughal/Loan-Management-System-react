import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Clock, Users, FileText } from 'lucide-react';
import supabase from '../../lib/Db';

const AdminDashboard = () => {
  const [allLoanData, setAllLoanData] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [approvedCount, setApprovedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [disbursedAmount, setDisbursedAmount] = useState(0);

  useEffect(() => {
    const handleData = async () => {
      const { data, error } = await supabase.from('LoanData').select('*');
      setAllLoanData(data);

      const pending = data.filter((item) => item.status === "Pending").length;
      const approved = data.filter((item) => item.status === "Approved").length;
      const rejected = data.filter((item) => item.status === "Rejected").length;

      const totalDisbursed = data
        .filter(item => item.status === "Approved")
        .reduce((sum, item) => sum + Number(item.amount || 0), 0);

      setApprovedCount(approved);
      setPendingCount(pending);
      setRejectedCount(rejected);
      setDisbursedAmount(totalDisbursed);
    };
    handleData();
  }, []);

  const updateLoanStatus = async (id, status) => {
    const { data, error } = await supabase
      .from('LoanData')
      .update({ status })
      .eq('id', id);
    
    if (!error) {
      // After updating status, re-fetch the data to reflect changes
      const { data: updatedData, error: fetchError } = await supabase
        .from('LoanData')
        .select('*');
      setAllLoanData(updatedData);
    } else {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-700 text-white p-6 space-y-8 hidden lg:block">
        <h2 className="text-2xl font-bold text-center">Loan Admin</h2>
        <nav className="space-y-2 text-lg">
          <Link to="/admin-dashboard" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            <FileText size={22} /> Dashboard
          </Link>
          <Link to="/pending" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            <Clock size={22} /> Pending Requests
          </Link>
          <Link to="/approved-loan" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            Approved Loans
          </Link>
          <Link to="/rejected-loan" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            Rejected Loans
          </Link>
          <Link to="/disbursed" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            <DollarSign size={22} /> Disbursed Loans
          </Link>
          <Link to="/borrowers" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            <Users size={22} /> Borrowers
          </Link>
        </nav>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-emerald-700">Welcome, Admin</h1>
          <div className="text-lg font-semibold text-gray-700">Hello, Admin</div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Total Applications</h3>
            <p className="text-2xl mt-2 font-bold text-emerald-600">{allLoanData.length}</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Pending Requests</h3>
            <p className="text-2xl mt-2 font-bold text-yellow-500">{pendingCount}</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Approved Loans</h3>
            <p className="text-2xl mt-2 font-bold text-green-600">{approvedCount}</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Rejected Loans</h3>
            <p className="text-2xl mt-2 font-bold text-red-600">{rejectedCount}</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Total Disbursed</h3>
            <p className="text-2xl mt-2 font-bold text-emerald-600">{disbursedAmount}</p>
          </div>
        </div>

        {/* Loan Data Table */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Loan Applications</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">User</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Loan Amount</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allLoanData.map((loan) => (
                <tr key={loan.id}>
                  <td className="py-2 px-4 text-sm text-gray-600">{loan.name}</td>
                  <td className="py-2 px-4 text-sm text-gray-600">{loan.amount}</td>
                  <td className="py-2 px-4 text-sm text-gray-600">{loan.status}</td>
                  <td className="py-2 px-4 text-sm text-gray-600">
                    {loan.status === "Pending" && (
                      <div>
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                          onClick={() => updateLoanStatus(loan.id, "Approved")}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={() => updateLoanStatus(loan.id, "Rejected")}
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Monthly Loan Disbursement</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={allLoanData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="loans" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
