const DailyReport = require("../Models/Report");
const Employee = require("../Models/employee");

// @desc Add a new daily report
// @route POST /api/reports/add
const addReport = async (req, res) => {
  try {
    const { employeeId, date, department, workDone, desc, remarks } = req.body;

    // ✅ Find employee using employeeId from frontend
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    // ✅ Create new report
    const newReport = new DailyReport({
      employeeId: employee._id,
      employeeName: employee.name, // ✅ also store readable name
      department,
      date,
      workDone,
      desc,
      remarks,
    });

    await newReport.save();
    res.status(201).json({ message: "Report added successfully" });

  } catch (error) {
    console.error("Error adding report:", error);
    res.status(500).json({ error: "Failed to add report" });
  }
};

// @desc Get all reports
// @route GET /api/reports/get
const getAllReports = async (req, res) => {
  try {
    const reports = await DailyReport.find().populate("employeeId", "name department");
    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ error: "Failed to fetch reports" });
  }
};

module.exports = {
  addReport,
  getAllReports,
};
