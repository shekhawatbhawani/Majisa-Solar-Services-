const express = require("express");
const router = express.Router();
const { createFeedback, getAllFeedbacks } = require("../Controllers/feedbackController");

router.post("/feedback", createFeedback);
router.get("/feedback", getAllFeedbacks);

module.exports = router;
