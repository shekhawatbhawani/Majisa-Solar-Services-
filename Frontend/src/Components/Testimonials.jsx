import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

// Star Rating UI Component
const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          onClick={() => setRating(star)}
          className={`w-6 h-6 cursor-pointer transition ${
            rating >= star ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsWithForm = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [rating, setRating] = useState(0);
  const [allFeedbacks, setAllFeedbacks] = useState([]);

  // Get feedbacks from backend
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("https://majisa-solar-services.onrender.com/api/feedback");
      setAllFeedbacks(res.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
      alert("❌ Failed to load feedbacks from backend");
    }
  };

  // Input handling
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating) return alert("Please select a rating before submitting.");

    try {
      await axios.post("https://majisa-solar-services.onrender.com/api/feedback", {
        ...formData,
        rating,
      });
      alert("🎉 Thank you for your feedback!");
      setFormData({ name: "", message: "" });
      setRating(0);
      fetchFeedbacks(); // refresh feedbacks
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("❌ Submission failed. Try again.");
    }
  };

  return (
    <div>
      {/* Testimonials List */}
      <section className="bg-green-50 py-20 px-4 md:px-12 text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold text-[#0f172a]">Customer Testimonials</h2>
          <p className="text-lg mt-4 text-gray-600">
            Real feedback from our valuable customers.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allFeedbacks.length > 0 ? (
            allFeedbacks.map((feedback, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition duration-300 border border-green-100"
              >
                <p className="text-gray-700 italic mb-4">“{feedback.message}”</p>
                <h4 className="font-semibold text-green-700">{feedback.name}</h4>
                <div className="flex mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`${
                        feedback.rating >= star ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">No feedback found.</p>
          )}
        </div>
      </section>

      {/* Feedback Form */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Share Your Feedback
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-green-50 p-8 rounded-xl shadow-md">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Feedback</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Write your experience here..."
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Rating</label>
              <StarRating rating={rating} setRating={setRating} />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition w-full font-semibold"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsWithForm;
