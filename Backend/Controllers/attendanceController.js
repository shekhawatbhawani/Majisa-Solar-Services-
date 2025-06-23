const Attendance = require("../Models/Attendance");
const Employee = require("../Models/employee");

// @desc Save or Update attendance for an employee
exports.saveAttendance = async (req, res) => {
  const { employeeId, month, year, days } = req.body;

  try {
    let attendance = await Attendance.findOne({ employeeId, month, year });

    if (attendance) {
      // Update existing record
      attendance.days = days;
      await attendance.save();
      return res.status(200).json({ message: "Attendance updated successfully" });
    }

    // Create new record
    const newAttendance = new Attendance({ employeeId, month, year, days });
    await newAttendance.save();

    res.status(201).json({ message: "Attendance saved successfully" });
  } catch (error) {
    console.error("Error saving attendance:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// @desc Get all attendance for a given month & year
exports.getAttendanceByMonth = async (req, res) => {
  const { month, year } = req.query;

  try {
    const records = await Attendance.find({ month, year }).populate("employeeId");

    const result = records.map((record) => {
      const presentCount = record.days.filter((d) => d.status === "P").length;
      const salaryPerDay = record.employeeId.salaryPerDay || 0;
      const totalSalary = presentCount * salaryPerDay;

      return {
        _id: record._id,
        employeeId: record.employeeId._id,
        name: record.employeeId.name,
        salaryPerDay,
        present: presentCount,
        salary: totalSalary,
        paid: 0, // You can update this later
        balance: totalSalary,
        days: record.days,
        month: record.month,
        year: record.year,
      };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching attendance:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


// @desc Get attendance for a specific employee by ID
exports.getAttendanceByEmployee = async (req, res) => {
  const { employeeId } = req.params;

  try {
    const attendanceRecords = await Attendance.find({ employeeId }).populate("employeeId");

    if (!attendanceRecords || attendanceRecords.length === 0) {
      return res.status(404).json({ message: "No attendance records found for this employee" });
    }

    const result = attendanceRecords.map((record) => {
      const presentCount = record.days.filter((d) => d.status === "P").length;
      const salaryPerDay = record.employeeId.salaryPerDay || 0;
      const totalSalary = presentCount * salaryPerDay;

      return {
        _id: record._id,
        employeeId: record.employeeId._id,
        name: record.employeeId.name,
        salaryPerDay,
        present: presentCount,
        salary: totalSalary,
        paid: 0, // Update if payment tracking is added
        balance: totalSalary,
        days: record.days,
        month: record.month,
        year: record.year,
      };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching employee attendance:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
