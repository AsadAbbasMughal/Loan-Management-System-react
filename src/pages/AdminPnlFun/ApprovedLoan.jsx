import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../../lib/Db';
import { FileText, Clock, DollarSign, Users } from 'lucide-react'; 

const ApprovedLoan = () => {
  const [approvedLoans, setApprovedLoans] = useState([]);

  useEffect(() => {
    const fetchApprovedLoans = async () => {
      const { data, error } = await supabase
        .from('LoanData')
        .select('*')
        .eq('status', 'Approved');

      if (error) {
        console.error('Error fetching approved loans:', error);
        return;
      }

      setApprovedLoans(data); 
    };

    fetchApprovedLoans();
  }, []);

  return (
    <div className="min-h-screen flex pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-700 text-white p-6 space-y-8 hidden lg:block">
        <h2 className="text-2xl font-bold text-center">Loan Admin</h2>

        <nav className="space-y-2 text-lg">
          <Link to="/admin-dashboard" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            <FileText size={28} /> Dashboard
          </Link>
          <Link to="/pending" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            <Clock size={28} /> Pending Requests
          </Link>
          <Link to="/approved-loan" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            <FileText size={28} /> Approved Loans
          </Link>
          <Link to="/rejected-loan" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            <FileText size={28} /> Rejected Loans
          </Link>
          <Link to="/disbursed" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            <DollarSign size={28} /> Disbursed Loans
          </Link>
          <Link to="/borrowers" className="flex items-center gap-3 hover:bg-emerald-600 p-3 rounded-lg transition">
            <Users size={28} /> Borrowers
          </Link>
        </nav>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-emerald-700">Approved Loan Requests</h1>
        <p className="mt-2 text-gray-600">List of approved loan applications will appear here.</p>

        {/* Table for Approved Loans */}
        <div className="mt-6 overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full text-left table-auto">
            <thead className="bg-emerald-700 text-white">
              <tr>
                <th className="px-4 py-2">Loan ID</th>
                <th className="px-4 py-2">Borrower Name</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Application Date</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {approvedLoans.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-4 py-2 text-center text-gray-600">No approved loan requests found.</td>
                </tr>
              ) : (
                approvedLoans.map((loan) => (
                  <tr key={loan.id}>
                    <td className="px-4 py-2">{loan.id}</td>
                    <td className="px-4 py-2">{loan.name}</td>
                    <td className="px-4 py-2">{loan.amount}</td>
                    <td className="px-4 py-2">{new Date(loan.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2 text-green-500">{loan.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ApprovedLoan;
