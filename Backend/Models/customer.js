// model/customer.js
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    mobile: { type: String, required: true },
    status: {
      type: String,
      enum: [
        "start",
        "load change / new connection",
        "loan",
        "structure",
        "plates",
        "meter testing",
        "solar file",
        "subsidy",
      ],
      default: "start",
    },
    address: { type: String },
    kNumber: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
