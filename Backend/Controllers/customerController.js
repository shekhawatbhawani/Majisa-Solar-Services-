// controller/customer.js
const Customer = require("../Models/customer");

// Add a new customer
exports.addCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json({ message: "Customer added successfully", customer });
  } catch (error) {
    res.status(500).json({ message: "Error adding customer", error: error.message });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching customers", error: error.message });
  }
};

// Update customer status
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await Customer.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ message: "Status updated", customer: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error: error.message });
  }
};
