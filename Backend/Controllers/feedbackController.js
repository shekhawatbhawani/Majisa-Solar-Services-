const Feedback = require("../Models/feedback");

// POST - Add new feedback
exports.createFeedback = async (req, res) => {
  try {
    const { name, message, rating } = req.body;
    if (!name || !message || !rating) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newFeedback = new Feedback({ name, message, rating });
    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted successfully", feedback: newFeedback });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET - All feedbacks
exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
};
