const express = require("express");
const router = express.Router();
const { addExpense, getExpenses } = require("../Controllers/expenseController");

router.post("/add", addExpense);
router.get("/all", getExpenses);

module.exports = router;