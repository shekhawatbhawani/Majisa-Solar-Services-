import React, { useEffect, useState } from "react";
import axios from "axios";

const DailyReportForm = () => {
  const [reportData, setReportData] = useState({
    employeeId: "",  // ✅ Store employeeId now
    date: "",
    department: "",
    workDone: "",
    desc: "",
    remarks: "",
  });

  const [employeeList, setEmployeeList] = useState([]);

  // ✅ Fetch employee list on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/employees/all");
        setEmployeeList(response.data);
      } catch (error) {
        console.error("❌ Failed to fetch employee list:", error);
      }
    };
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setReportData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/reports/add", reportData);
      alert("✅ Report Submitted Successfully!");
      console.log("📋 Response:", response.data);
      setReportData({
        employeeId: "",
        date: "",
        department: "",
        workDone: "",
        desc: "",
        remarks: "",
      });
    } catch (error) {
      console.error("❌ Report submission failed:", error);
      alert("❌ Failed to submit report.");
    }
  };

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center bg-green-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg space-y-5"
      >
        <h2 className="text-3xl font-bold text-green-700 text-center">
          Daily Work Report
        </h2>

        {/* ✅ Employee Dropdown */}
        <select
          name="employeeId"
          value={reportData.employeeId}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Employee</option>
          {employeeList.map((emp) => (
            <option key={emp._id} value={emp._id}>
              {emp.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={reportData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          name="department"
          value={reportData.department}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Department</option>
          <option value="Installation">Installation</option>
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Admin">Admin</option>
        </select>

        <textarea
          name="workDone"
          placeholder="Work Done Today"
          rows="3"
          value={reportData.workDone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
        />

        <textarea
          name="desc"
          placeholder="Pure din kya kya kaam hua (Detailed Description)"
          rows="4"
          value={reportData.desc}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
        />

        <textarea
          name="remarks"
          placeholder="Remarks (Optional)"
          rows="2"
          value={reportData.remarks}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default DailyReportForm;
