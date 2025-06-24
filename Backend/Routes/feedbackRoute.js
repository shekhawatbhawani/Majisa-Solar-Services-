const express = require("express");
const router = express.Router();
const { createFeedback, getAllFeedbacks , deleteFeedback } = require("../Controllers/feedbackController");

router.post("/", createFeedback);
router.get("/", getAllFeedbacks);
router.delete("/:id", deleteFeedback);


module.exports = router;
