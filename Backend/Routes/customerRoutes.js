// routes/routerCustomer.js
const express = require("express");
const router = express.Router();
const customerController = require("../Controllers/customerController");

// Routes
router.post("/add", customerController.addCustomer);
router.get("/", customerController.getAllCustomers);
router.put("/status/:id", customerController.updateStatus);

module.exports = router;
