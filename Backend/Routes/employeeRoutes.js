const express = require("express");
const router = express.Router();
const {
  addEmployee,
  getAllEmployees,
  updateBalance
} = require("../Controllers/employeeController");

// Routes
router.post("/add", addEmployee);
router.get("/all", getAllEmployees);
router.put("/:id/balance", updateBalance);
module.exports = router;
