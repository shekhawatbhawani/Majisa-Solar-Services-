import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Status color classes
const statusColors = {
  start: "bg-blue-100 text-blue-700",
  "load change / new connection": "bg-yellow-100 text-yellow-800",
  loan: "bg-purple-100 text-purple-700",
  structure: "bg-gray-100 text-gray-700",
  plates: "bg-orange-100 text-orange-700",
  "meter testing": "bg-pink-100 text-pink-700",
  "solar file": "bg-indigo-100 text-indigo-700",
  subsidy: "bg-green-100 text-green-700",
};

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [searchField, setSearchField] = useState("kNumber");
  const [searchValue, setSearchValue] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  // 🟡 Fetch from backend API
  const fetchCustomers = async () => {
    try {
      const res = await axios.get("https://majisa-solar-services.onrender.com/api/customers");
      setCustomers(res.data);
      setFilteredCustomers(res.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSearch = () => {
    const filtered = customers.filter((customer) =>
      customer[searchField]?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCustomers(filtered);
  };

  const handleStatusChange = async (id, newStatus) => {
    const confirmChange = window.confirm("Are you sure you want to change the status?");
    if (confirmChange) {
      try {
        await axios.put(`https://majisa-solar-services.onrender.com/api/customers/status/${id}`, { status: newStatus });

        const updated = customers.map((item) =>
          item._id === id ? { ...item, status: newStatus } : item
        );
        setCustomers(updated);
        setFilteredCustomers(updated);
      } catch (err) {
        console.error("Failed to update status:", err);
        alert("Status update failed.");
      }
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br m-10 from-white via-green-50 to-green-100">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-green-700">Customer List</h2>
          <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">
            <Link to="/admin/add-new-customer">➕ Add New Customer</Link>
          </button>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <select
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="kNumber">K-Number</option>
            <option value="name">Name</option>
            <option value="mobile">Mobile Number</option>
            <option value="status">Status</option>
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
        </div>

        {/* Customers Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-center border border-gray-300">
            <thead className="bg-green-100">
              <tr>
                <th className="py-2 px-4 border-b">K-Number</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Mobile</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((cust) => (
                  <tr key={cust._id}>
                    <td className="py-2 px-4 border-b">{cust.kNumber}</td>
                    <td className="py-2 px-4 border-b">{cust.name}</td>
                    <td className="py-2 px-4 border-b">{cust.mobile}</td>
                    <td className="py-2 px-4 border-b capitalize">
                      <select
                        value={cust.status}
                        onChange={(e) => handleStatusChange(cust._id, e.target.value)}
                        className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                          statusColors[cust.status] || "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {Object.keys(statusColors).map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-gray-500">
                    No customers found.
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

export default Customer;
