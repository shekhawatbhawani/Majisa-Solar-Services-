const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  email: String,
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  address: String,
  department: String,
  joiningDate: String,
  salaryPerDay: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    default: 0, // Optional: start with 0 balance
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
