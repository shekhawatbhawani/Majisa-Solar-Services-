const express = require("express");
const router = express.Router();

const {
  saveAttendance,
  getAttendanceByMonth,
  getAttendanceByEmployee, // ✅ Add controller
} = require("../Controllers/attendanceController");

// ✅ POST - Save or Update attendance
router.post("/", saveAttendance);

// ✅ GET - Get attendance for all employees by month & year
router.get("/", getAttendanceByMonth);

// ✅ NEW: GET - Get attendance for a specific employee
router.get("/employee/:employeeId", getAttendanceByEmployee);

module.exports = router;
