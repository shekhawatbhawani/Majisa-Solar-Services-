const express = require("express");
const router = express.Router();
const { createFeedback, getAllFeedbacks , deleteFeedback } = require("../Controllers/feedbackController");

router.post("/feedback", createFeedback);
router.get("/feedback", getAllFeedbacks);
router.delete("/feedback/:id", deleteFeedback);


module.exports = router;
