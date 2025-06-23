import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: 0,
  });

  const [hoverRating, setHoverRating] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/feedback", formData);
      alert("🎉 Thank you for your feedback!");
      console.log("Submitted:", res.data);
      setFormData({ name: "", message: "", rating: 0 });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-10 my-4 px-4 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-4 md:p-12 transition hover:shadow-2xl">
        {/* Slogan */}
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-2">
          “Aapka Vishwas, Hamari Pehchaan!”
        </h2>

        <p className="text-center text-gray-600 mb-10">
          We value your experience. Help us grow by sharing your valuable feedback below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Feedback</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="How was your experience with Majisa Solar?"
              className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none resize-none"
              required
            ></textarea>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Rating</label>
            <div className="flex gap-2 text-yellow-400 text-2xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition transform hover:scale-110"
                >
                  <FaStar
                    className={`cursor-pointer ${
                      star <= (hoverRating || formData.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
            {formData.rating > 0 && (
              <p className="text-sm text-gray-600 mt-1">
                You rated: {formData.rating} star{formData.rating > 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-all shadow-lg"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TestimonialForm;
