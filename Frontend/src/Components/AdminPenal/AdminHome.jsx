import React from "react";
import { useNavigate } from "react-router-dom";
import meterTesting from "../../../public/metertestinform.pdf";
import netmeeting from "../../../public/netmeeting.pdf";

const AdminHome = () => {
  const navigate = useNavigate();

  const openPDF = (path) => {
    window.open(path, "_blank");
  };

  return (
    <div className="min-h-screen sm:mt-10 mt-6 w-full bg-gradient-to-br from-white via-green-50 to-green-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Text */}
        <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
          Welcome to Admin Dashboard
        </h1>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <button
            onClick={() => navigate("/admin/customers")}
            className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition"
          >
            ➕ Add Customer
          </button>

          <button
            onClick={() => navigate("/admin/view-contacts")}
            className="bg-amber-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-amber-600 transition"
          >
            📧 View Contact Messages
          </button>

          <button
            onClick={() => navigate("/admin/projects")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            🛠️ Add Product
          </button>

          <button
            onClick={() => navigate("/add-installation")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition"
          >
            🏗️ Add Installation Record
          </button>

          <button
            onClick={() => navigate("/admin/employees")}
            className="bg-rose-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-rose-700 transition"
          >
            👷 Manage Employees
          </button>

          <button
            onClick={() => navigate("/admin/feedback")}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition"
          >
            💬 View Feedback
          </button>

          <button
            onClick={() => navigate("/admin/view-users")}
            className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-900 transition"
          >
            👤 View All Users
          </button>

          <button
            onClick={() => openPDF("/metertestinform.pdf")}
            className="bg-yellow-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-600 transition"
          >
            🧪 Meter Testing Application
          </button>

          <button
            onClick={() => openPDF("/netmeeting.pdf")}
            className="bg-teal-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-teal-700 transition"
          >
            ☀️ Solar Form PDF
          </button>

          <button
            onClick={() => navigate("/admin/employee-attendance")}
            className="bg-lime-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-lime-700 transition"
          >
            📋 Employee Attendance
          </button>

          {/* ✅ New Loan Processes Button */}
          <button
            onClick={() =>
              window.open("https://consumer.pmsuryaghar.gov.in/consumer/#/login", "_blank")
            }
            className="bg-cyan-700 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-cyan-800 transition"
          >
            💰 Loan Processes
          </button>
            <button
            onClick={() => navigate("/admin/account")}
            className="bg-orange-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-orange-700 transition"
          >
            💼 Account
          </button>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              📌 Latest Projects
            </h2>
            <p className="text-gray-600">No recent projects available.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              👥 Recent Customers
            </h2>
            <p className="text-gray-600">No new customers found yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
