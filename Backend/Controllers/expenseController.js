const Expense = require("../Models/Expense");

exports.addExpense = async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const { category, month, year, date } = req.query;
    const query = {};
    if (category) query.category = category;
    if (month) query.month = month;
    if (year) query.year = parseInt(year);
    if (date) query.date = parseInt(date);

    const expenses = await Expense.find(query);
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

