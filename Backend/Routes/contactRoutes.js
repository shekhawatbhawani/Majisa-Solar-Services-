const express = require("express");
const router = express.Router();
const { sendContactForm , getAllContacts} = require("../Controllers/contactController");

router.post("/contact", sendContactForm);
router.get("/contact", getAllContacts); 
module.exports = router;
