const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Number, required: true },
  month: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Expense", expenseSchema);
