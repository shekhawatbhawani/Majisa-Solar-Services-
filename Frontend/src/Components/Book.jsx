import React from "react";
import { Link } from "react-router-dom";

const BookInstallation = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-10 rounded-2xl shadow-md">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-block text-green-600 hover:text-green-700 font-medium transition"
        >
          ← Back to Home
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-center text-[#16a34a] mb-6">
        Book Your Solar Installation
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Installation Address"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Select Installation Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
          </select>
          <input
            type="date"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <textarea
          rows="4"
          placeholder="Additional Notes"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>

        <button
          type="submit"
          className="bg-[#16a34a] hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md w-full"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookInstallation;
