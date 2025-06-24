import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReportList = () => {
  const { employeeId } = useParams(); // ✅ get ID from URL
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(`https://majisa-solar-services.onrender.com/api/reports/by-employee/${employeeId}`);
        setReports(response.data);
      } catch (error) {
        console.error("❌ Failed to fetch reports:", error);
      }
    };

    fetchReports();
  }, [employeeId]);

  return (
    <div className="min-h-screen py-6 md:p-12 bg-green-50">
      <div className="max-w-6xl mx-auto bg-white py-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Reports for Employee
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-center border border-gray-300">
            <thead className="bg-green-100">
              <tr>
                <th className="py-3 px-4 border-b">Employee Name</th>
                <th className="py-3 px-4 border-b">Date</th>
                <th className="py-3 px-4 border-b">Department</th>
                <th className="py-3 px-4 border-b">Work Done</th>
                <th className="py-3 px-4 border-b">Full Description</th>
                <th className="py-3 px-4 border-b">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {reports.length > 0 ? (
                reports.map((report, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{report.employeeName}</td>
                    <td className="py-2 px-4 border-b">{report.date}</td>
                    <td className="py-2 px-4 border-b">{report.department}</td>
                    <td className="py-2 px-4 border-b">{report.workDone}</td>
                    <td className="py-2 px-4 border-b">{report.desc}</td>
                    <td className="py-2 px-4 border-b">{report.remarks || "-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 text-gray-500">
                    No reports found.
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

export default ReportList;
