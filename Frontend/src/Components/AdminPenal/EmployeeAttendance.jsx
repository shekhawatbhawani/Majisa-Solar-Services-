import React, { useState, useEffect } from "react";
import axios from "axios";

const daysInMonth = 30;

const EmployeeAttendance = () => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);

  const storedMonth = localStorage.getItem("selectedMonth") || months[new Date().getMonth()];
  const storedYear = localStorage.getItem("selectedYear") || String(currentYear);

  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState(storedMonth);
  const [year, setYear] = useState(storedYear);
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    localStorage.setItem("selectedMonth", month);
    localStorage.setItem("selectedYear", year);
  }, [month, year]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const monthIndex = months.indexOf(month);
        const [attendanceRes, employeeRes] = await Promise.all([
          axios.get(`http://localhost:5000/api/attendance?month=${monthIndex}&year=${year}`),
          axios.get("http://localhost:5000/api/employees/all")
        ]);

        const balanceMap = new Map();
        attendanceRes.data.forEach((rec) => {
          let presentDays = rec.days.filter((d) => d.status === "P").length;
          let monthlySalary = presentDays * (rec.salaryPerDay || 500);
          let previousBalance = rec.previousBalance || 0;

          const days = Array(daysInMonth).fill("absent");
          rec.days.forEach((d) => {
            if (d.date >= 1 && d.date <= daysInMonth) {
              if (d.status === "P") days[d.date - 1] = "present";
              else if (d.status === "A") days[d.date - 1] = "absent";
              else if (d.status === "L") days[d.date - 1] = "leave";
              else if (d.status === "H") days[d.date - 1] = "holiday";
            }
          });

          balanceMap.set(rec.employeeId, {
            attendance: days,
            paidSalary: rec.paid || 0,
            previousBalance,
            salaryPerDay: rec.salaryPerDay || 500,
            presentDays,
            monthlySalary
          });
        });

        const employees = employeeRes.data.map((emp) => {
          const record = balanceMap.get(emp._id) || {
            attendance: Array(daysInMonth).fill("absent"),
            paidSalary: 0,
            previousBalance: emp.balance || 0,
            salaryPerDay: emp.salaryPerDay || 500,
            presentDays: 0,
            monthlySalary: 0,
          };
          const totalBalance = record.previousBalance + record.monthlySalary - record.paidSalary;

          return {
            _id: emp._id,
            name: emp.name,
            salaryPerDay: record.salaryPerDay,
            attendance: record.attendance,
            paidSalary: record.paidSalary,
            presentDays: record.presentDays,
            monthlySalary: record.monthlySalary,
            totalBalance,
            previousBalance: record.previousBalance,
          };
        });

        setAttendance(employees);
        setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [month, year]);

  const handleStatusChange = (empIndex, dayIndex, status) => {
    if (!window.confirm("Are you sure you want to change this status?")) return;

    const updated = [...attendance];
    updated[empIndex].attendance[dayIndex] = status;

    const presentDays = updated[empIndex].attendance.filter((d) => d === "present").length;
    const monthlySalary = presentDays * updated[empIndex].salaryPerDay;
    const totalBalance = updated[empIndex].previousBalance + monthlySalary - updated[empIndex].paidSalary;

    updated[empIndex].presentDays = presentDays;
    updated[empIndex].monthlySalary = monthlySalary;
    updated[empIndex].totalBalance = totalBalance;

    setAttendance(updated);
    setIsSaved(false);
  };

  const handleSave = async () => {
    if (!month || !year) return alert("⚠️ Please select both month and year.");
    if (!window.confirm("Are you sure you want to save attendance?")) return;

    const monthIndex = months.indexOf(month);

    const promises = attendance.map((emp) => {
      const daysArray = emp.attendance.map((status, index) => ({
        date: index + 1,
        status:
          status === "present"
            ? "P"
            : status === "absent"
            ? "A"
            : status === "leave"
            ? "L"
            : "H",
      }));

      return axios
        .post("http://localhost:5000/api/attendance", {
          employeeId: emp._id,
          month: monthIndex,
          year: parseInt(year),
          days: daysArray,
          previousBalance: emp.totalBalance,
          salaryPerDay: emp.salaryPerDay,
        })
        .then(() =>
          axios.put(`http://localhost:5000/api/employees/${emp._id}/balance`, {
            balance: emp.totalBalance,
          })
        );
    });

    try {
      await Promise.all(promises);
      alert("✅ Attendance and balance saved!");
      setIsSaved(true);
    } catch (err) {
      console.error("❌ Error saving:", err);
      alert("❌ Failed to save attendance or balance.");
    }
  };

  if (loading) return <div className="p-6 text-center">⏳ Loading employees...</div>;

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen overflow-auto">
      <h1 className="text-2xl font-bold mb-4 text-green-700 text-center">
        📅 Employee Attendance Tracker
      </h1>

      <div className="flex flex-wrap gap-4 items-center justify-center mb-6">
        <select
          className="border px-4 py-2 rounded text-sm"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          {months.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
        <select
          className="border px-4 py-2 rounded text-sm"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
        >
          💾 Save Attendance
        </button>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full bg-white border rounded-xl shadow text-xs md:text-sm">
          <thead className="bg-green-100 text-gray-800">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border text-left">Name</th>
              {[...Array(daysInMonth)].map((_, i) => (
                <th key={i} className="p-1 border text-center text-[10px]">{i + 1}</th>
              ))}
              <th className="p-2 border">Present</th>
              <th className="p-2 border">Salary</th>
              <th className="p-2 border">Paid</th>
              <th className="p-2 border">Balance</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((emp, empIndex) => (
              <tr key={empIndex} className="text-center hover:bg-gray-50">
                <td className="border p-1">{empIndex + 1}</td>
                <td className="border p-1 text-left font-medium">{emp.name}</td>
                {emp.attendance.map((status, dayIndex) => (
                  <td key={dayIndex} className="border p-1">
                    <select
                      value={status}
                      onChange={(e) => handleStatusChange(empIndex, dayIndex, e.target.value)}
                      className="text-xs border rounded px-1 py-0.5 w-full"
                    >
                      <option value="present">P</option>
                      <option value="absent">A</option>
                      <option value="leave">L</option>
                      <option value="holiday">H</option>
                    </select>
                  </td>
                ))}
                <td className="border p-1 text-green-700 font-semibold">{emp.presentDays}</td>
                <td className="border p-1 text-blue-700 font-semibold">₹{emp.monthlySalary}</td>
                <td className="border p-1 text-orange-600">₹{emp.paidSalary}</td>
                <td className="border p-1 text-red-600 font-bold">₹{emp.totalBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
