import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchField, setSearchField] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  // Function to fetch all employees
  const fetchAllEmployees = async () => {
    try {
      const res = await axios.get("https://majisa-solar-services.onrender.com/api/employees/all");
      setEmployees(res.data);
      setFilteredEmployees(res.data);
    } catch (error) {
      console.error("❌ Failed to fetch employees:", error);
    }
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  const handleSearch = () => {
    const filtered = employees.filter((emp) =>
      emp[searchField].toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  // Remove duplicate employees based on mobile number
  const uniqueEmployees = [
    ...new Map(filteredEmployees.map((emp) => [emp.mobile, emp])).values(),
  ];

  return (
    <div className="min-h-screen py-6 md:p-12 bg-gradient-to-br my-10 from-white via-green-50 to-green-100">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-green-700">Employee List</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/admin/add-new-employee"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              ➕ Add New Employee
            </Link>
            <Link
              to="/admin/daily-report"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              📝 Add Report Today
            </Link>
          </div>
        </div>

        {/* Search Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <select
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="employeeId">ID</option>
            <option value="name">Name</option>
            <option value="mobile">Mobile</option>
            <option value="department">Department</option>
          </select>

          <input
            type="text"
            placeholder={`Search by ${searchField}`}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🔍 Search
          </button>

          {/* ✅ NEW: Get All Button */}
          {/* ✅ Updated: Navigate to All Details Page */}
          <Link
            to="/admin/all-employee-details"
            className="bg-green-500 text-center text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            📂 Get All Employee Details
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-center border border-gray-300">
            <thead className="bg-green-100">
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Mobile</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Department</th>
                <th className="py-2 px-4 border-b">Report</th>
              </tr>
            </thead>
            <tbody>
              {uniqueEmployees.length > 0 ? (
                uniqueEmployees.map((emp) => (
                  <tr key={emp._id || emp.employeeId}>
                    <td className="py-2 px-4 border-b">{emp.employeeId}</td>
                    <td className="py-2 px-4 border-b">{emp.name}</td>
                    <td className="py-2 px-4 border-b">{emp.mobile}</td>
                    <td className="py-2 px-4 border-b">{emp.address}</td>
                    <td className="py-2 px-4 border-b">{emp.department}</td>
                    <td className="py-2 px-4 border-b">
                      <Link
                        to={`/admin/reports/${emp._id}`}
                        className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                      >
                        📋 Report
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 text-gray-500">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
