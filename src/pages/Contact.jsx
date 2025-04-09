import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 pt-22">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl w-full border border-emerald-200">
        <h2 className="text-3xl font-bold text-emerald-600 mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-gray-500 mb-6">
          Have questions about our loan plans or need assistance? Fill out the form and we'll reach out!
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Loan Type</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Personal Loan</option>
              <option>Business Loan</option>
              <option>Education Loan</option>
              <option>Home Loan</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Message</label>
            <textarea
              rows="4"
              placeholder="Write your query or message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 font-semibold transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
