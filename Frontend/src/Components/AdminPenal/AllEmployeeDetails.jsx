import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllEmployeeDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("https://majisa-solar-services.onrender.com/api/employees/all");
        setEmployees(res.data);
        setLoading(false);
      } catch (error) {
        console.error("❌ Failed to fetch employees:", error);
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const handleEmployeeClick = async (employee) => {
    setSelectedEmployee(employee);
    try {
      const res = await axios.get(
        `https://majisa-solar-services.onrender.com/api/attendance/employee/${employee._id}`
      );
      setAttendance(res.data);
    } catch (error) {
      console.error("❌ Failed to fetch attendance:", error);
      setAttendance([]);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        All Employees
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Employee List */}
        <div className="bg-white shadow-lg rounded-xl p-4 overflow-y-auto max-h-[80vh]">
          <h3 className="text-xl font-semibold text-green-600 mb-4">Employee List</h3>
          <ul className="space-y-3">
            {loading ? (
              <p>Loading...</p>
            ) : (
              employees.map((emp) => (
                <li
                  key={emp._id}
                  className={`p-3 rounded-lg cursor-pointer hover:bg-green-100 transition border ${
                    selectedEmployee?._id === emp._id ? "bg-green-200" : ""
                  }`}
                  onClick={() => handleEmployeeClick(emp)}
                >
                  <strong>{emp.name}</strong> <br />
                  <span className="text-sm text-gray-600">{emp.mobile}</span>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Selected Employee Details */}
        <div className="bg-white shadow-lg rounded-xl p-6 overflow-y-auto max-h-[80vh]">
          {selectedEmployee ? (
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-green-600 mb-3">
                Employee Details
              </h3>
              <p><strong>ID:</strong> {selectedEmployee.employeeId}</p>
              <p><strong>Name:</strong> {selectedEmployee.name}</p>
              <p><strong>Email:</strong> {selectedEmployee.email || "N/A"}</p>
              <p><strong>Mobile:</strong> {selectedEmployee.mobile}</p>
              <p><strong>Gender:</strong> {selectedEmployee.gender}</p>
              <p><strong>Address:</strong> {selectedEmployee.address}</p>
              <p><strong>Department:</strong> {selectedEmployee.department}</p>
              <p><strong>Joining Date:</strong> {selectedEmployee.joiningDate}</p>
              <p><strong>Salary Per Day:</strong> ₹{selectedEmployee.salaryPerDay}</p>
              <p><strong>Balance:</strong> ₹{selectedEmployee.balance || 0}</p>

              <div className="flex gap-3 mt-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => navigate(`/admin/reports/${selectedEmployee._id}`)}
                >
                  📋 View Reports
                </button>
              </div>

              {/* Attendance Table */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-green-700 mb-2">Attendance Records</h4>
                {attendance.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 text-sm">
                      <thead className="bg-green-100">
                        <tr>
                          <th className="py-2 px-3 border">Month</th>
                          <th className="py-2 px-3 border">Year</th>
                          <th className="py-2 px-3 border">Present Days</th>
                          <th className="py-2 px-3 border">Salary</th>
                          <th className="py-2 px-3 border">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {attendance.map((att) => (
                          <tr key={att._id} className="text-center">
                            <td className="py-2 px-3 border">{att.month}</td>
                            <td className="py-2 px-3 border">{att.year}</td>
                            <td className="py-2 px-3 border">{att.present}</td>
                            <td className="py-2 px-3 border">₹{att.salary}</td>
                            <td className="py-2 px-3 border">₹{att.balance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No attendance data found.</p>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>Select an employee to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllEmployeeDetails;
