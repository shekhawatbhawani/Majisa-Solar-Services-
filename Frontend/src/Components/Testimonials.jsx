import React, { useState } from "react";

// Sample testimonials data
const testimonials = [
  {
    name: "Rajesh Sharma",
    title: "Homeowner, Jodhpur",
    quote:
      "Majisa Solar ne hamare ghar ke liye solar system install kiya aur pura process bahut hi smooth aur transparent tha. Ab ham bijli ke bills me 80% tak ki bachat kar rahe hain.",
  },
  {
    name: "Suman Yadav",
    title: "Farmer, Sikar",
    quote:
      "Mujhe solar water pump ki zarurat thi, aur Majisa Solar ne bahut acchi service di. Ab kheti ke kaam me bijli ki dikkat nahi hoti.",
  },
  {
    name: "Mohit Verma",
    title: "Shop Owner, Jaipur",
    quote:
      "Commercial rooftop system lagwaya hai aur saath hi net metering bhi set up hua. Ab to electricity ke liye pay karne ki jagah paisa mil raha hai!",
  },
];

// Star Rating Component
const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          onClick={() => setRating(star)}
          className={`w-6 h-6 cursor-pointer ${
            rating >= star ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.5 12.27.5 7.91l6.062-.88L10 2l2.938 5.03 6.062.88-4.5 4.36 1.378 5.82z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsWithForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [rating, setRating] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("⭐ Submitted Feedback:", { ...formData, rating });
    alert("Thank you for your feedback!");
    setFormData({ name: "", message: "" });
    setRating(0);
  };

  return (
    <div>
      {/* Testimonials Section */}
      <section className="bg-green-50 py-20 px-4 md:px-12 text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold text-[#0f172a]">What Our Customers Say</h2>
          <p className="text-lg mt-4 text-gray-600">
            We’re proud to serve families, farmers, and businesses across Rajasthan.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition duration-300 border border-green-100"
            >
              <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
              <h4 className="font-semibold text-green-700">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Share Your Experience with Majisa Solar
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-green-50 p-8 rounded-xl shadow-md">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Your Name</label>
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
              <label className="block text-gray-700 mb-1 font-medium">Your Feedback</label>
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
              <label className="block text-gray-700 mb-1 font-medium">Your Rating</label>
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
