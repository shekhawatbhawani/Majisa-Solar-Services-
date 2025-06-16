import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="pt-25 px-4 py-10 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-3">Contact Information</h2>
          <p className="mb-3 text-sm text-gray-300">
            📍 <span className="font-semibold">Location:</span> Losal Didwana Road, Infront of Delhi Hospital, Losal, Sikar, Rajasthan
          </p>
          <p className="mb-2 text-sm text-gray-300">
            📞 <span className="font-semibold">Phone:</span> <a href="tel:8769496106" className="hover:text-yellow-400">8769496106</a>
          </p>
          <p className="mb-4 text-sm text-gray-300">
            ✉️ <span className="font-semibold">Email:</span> <a href="mailto:info@majisasolar.com" className="hover:text-yellow-400">info@majisasolar.com</a>
          </p>

          <div className="w-full h-52">
            <iframe
              title="Majisa Solar Location"
              src="https://www.google.com/maps?q=Delhi%20Hospital%20Losal%20Rajasthan&output=embed"
              width="100%"
              height="100%"
              className="rounded"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Contact Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your query..."
                className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-white px-4 py-1.5 rounded text-sm hover:bg-yellow-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;