const Employee = require("../Models/employee");

// @desc    Add new employee
// @route   POST /api/employees/add
const addEmployee = async (req, res) => {
  try {
    const {
      employeeId,
      name,
      email,
      mobile,
      gender,
      address,
      department,
      joiningDate,
      salaryPerDay,
      balance, // ✅ Added balance field
    } = req.body;

    // Validate salary
    if (!salaryPerDay || isNaN(salaryPerDay)) {
      return res.status(400).json({ error: "Salary per day is required and must be a number" });
    }

    // Optional: Validate balance
    if (balance !== undefined && isNaN(balance)) {
      return res.status(400).json({ error: "Balance must be a number" });
    }

    const newEmployee = new Employee({
      employeeId,
      name,
      email,
      mobile,
      gender,
      address,
      department,
      joiningDate,
      salaryPerDay: Number(salaryPerDay),
      balance: balance !== undefined ? Number(balance) : 0, // ✅ Default to 0 if not provided
    });

    await newEmployee.save();
    res.status(201).json({ message: "Employee added successfully" });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      res.status(400).json({ error: `${field} already exists` });
    } else {
      console.error("Error adding employee:", error);
      res.status(500).json({ error: "Failed to add employee" });
    }
  }
};

// @desc    Get all employees
// @route   GET /api/employees/all
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

const updateBalance = async (req, res) => {
  try {
    const { id } = req.params;
    const { balance } = req.body;

    if (balance === undefined || isNaN(balance)) {
      return res.status(400).json({ error: "Balance must be a valid number" });
    }

    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    employee.balance = Number(balance);
    await employee.save();

    res.status(200).json({ message: "Balance updated successfully", balance: employee.balance });
  } catch (error) {
    console.error("Error updating balance:", error);
    res.status(500).json({ error: "Failed to update balance" });
  }
};

module.exports = {
  addEmployee,
  getAllEmployees,
  updateBalance
};
