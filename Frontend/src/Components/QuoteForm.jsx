import React from "react";

const QuoteForm = () => {
  return (
    <div className="bg-white mt-10 py-10 px-6 max-w-3xl mx-auto rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-[#f59e0b] mb-6">
        Get a Free Quote
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Fill in the details below to receive a customized solar quote.
      </p>
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="text"
          placeholder="Location / City"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          <option value="">Select Service Type</option>
          <option value="residential">Residential Installation</option>
          <option value="commercial">Commercial Installation</option>
          <option value="maintenance">Maintenance Request</option>
        </select>
        <textarea
          rows="4"
          placeholder="Describe Your Requirement"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#f59e0b] hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-md"
        >
          Request Quote
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
