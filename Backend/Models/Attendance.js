// models/Attendance.js
const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  month: {
    type: Number, // 0 to 11 (January = 0)
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  days: [
    {
      date: Number, // 1 to 31
      status: {
        type: String,
        enum: ["P", "A", "L", "H"], // Present, Absent, Leave, Holiday
        default: "A",
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
