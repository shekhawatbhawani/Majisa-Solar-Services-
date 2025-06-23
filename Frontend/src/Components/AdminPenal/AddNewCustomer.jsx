import React, { useState } from "react";
import axios from "axios"; // ✅ Import axios

const customerStatusOptions = [
  "start",
  "load change / new connection",
  "loan",
  "structure",
  "plates",
  "meter testing",
  "solar file",
  "subsidy",
];

const AddCustomerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    status: "start", // default status
    address: "",
    kNumber: "",
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
      const res = await axios.post("https://majisa-solar-services.onrender.com/api/customers/add", formData); // ✅ POST to backend route
      alert("Customer added successfully!");
      console.log("Response:", res.data);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        mobile: "",
        status: "start",
        address: "",
        kNumber: "",
      });
    } catch (error) {
      console.error("Error adding customer:", error);
      alert("Failed to add customer. Please check console for errors.");
    }
  };

  return (
    <div className="min-h-screen mt-11 flex items-center justify-center bg-green-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-green-700 text-center">
          Add New Customer
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {customerStatusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          name="kNumber"
          placeholder="K-Number"
          value={formData.kNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCustomerForm;
