const mongoose = require("mongoose");

const report = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  workDone: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
  },
});

module.exports = mongoose.model("DailyReport", report);
