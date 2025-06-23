import React, { useState } from "react";
import axios from "axios";

const AddNewEmployee = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    mobile: "",
    gender: "",
    address: "",
    department: "",
    joiningDate: "",
    salaryPerDay: "",
    balance: "", // ✅ Added balance field
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://majisa-solar-services.onrender.com/api/employees/add", formData);

      if (res.status === 201) {
        alert("✅ Employee added successfully!");
        console.log("Response:", res.data);

        setFormData({
          employeeId: "",
          name: "",
          email: "",
          mobile: "",
          gender: "",
          address: "",
          department: "",
          joiningDate: "",
          salaryPerDay: "",
          balance: "", // ✅ Reset balance as well
        });
      }
    } catch (error) {
      console.error("❌ Error adding employee:", error);
      alert(error?.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center bg-green-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg space-y-5"
      >
        <h2 className="text-3xl font-bold text-green-700 text-center mb-4">
          Add New Employee
        </h2>

        <input type="text" name="employeeId" placeholder="Employee ID" value={formData.employeeId} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
        <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />

        <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />

        <select name="department" value={formData.department} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg">
          <option value="">Select Department</option>
          <option value="Installation">Installation</option>
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Admin">Admin</option>
        </select>

        <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />

        <input
          type="number"
          name="salaryPerDay"
          placeholder="Salary Per Day (in ₹)"
          value={formData.salaryPerDay}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />

        {/* ✅ New balance input */}
        <input
          type="number"
          name="balance"
          placeholder="Balance (in ₹)"
          value={formData.balance}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewEmployee;
