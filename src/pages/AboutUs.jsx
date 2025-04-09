import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 flex items-center justify-center pt-18">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 border border-emerald-200">
        <h2 className="text-3xl font-bold text-emerald-600 text-center mb-6">About Us</h2>

        <p className="text-gray-700 text-lg mb-4">
          Welcome to <span className="text-emerald-600 font-semibold">LoanPage</span> – your trusted partner in financial solutions. 
          We aim to empower individuals and businesses by providing quick, secure, and hassle-free loan services.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">🌟 Our Mission</h3>
        <p className="text-gray-600 mb-4">
          To make financial support accessible to everyone, whether you’re starting a business, funding education, or covering personal needs.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">🚀 What We Offer</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          <li>Personal Loans with flexible repayment plans</li>
          <li>Business Loans to support startups & entrepreneurs</li>
          <li>Home Loans with minimal documentation</li>
          <li>Education Loans with low interest rates</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">🤝 Why Choose Us?</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Quick approvals & disbursal</li>
          <li>24/7 customer support</li>
          <li>Transparent policies</li>
          <li>Trusted by thousands of customers</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
