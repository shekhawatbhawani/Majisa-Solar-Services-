const express = require("express");
const router = express.Router();
const { addReport, getAllReports } = require("../Controllers/reportController");
const DailyReport = require("../Models/Report"); // ✅ Import the model for direct use

// Add new report
router.post("/add", addReport);

// Get all reports
router.get("/get", getAllReports);

// ✅ New Route: Get reports by employee ID
router.get("/by-employee/:id", async (req, res) => {
  try {
    const reports = await DailyReport.find({ employeeId: req.params.id }).sort({ date: -1 });
    res.json(reports);
  } catch (err) {
    console.error("Error fetching reports by employee ID:", err);
    res.status(500).json({ error: "Failed to fetch reports" });
  }
});

module.exports = router;
