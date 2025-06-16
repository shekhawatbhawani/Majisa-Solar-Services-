import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-yellow-400">Majisa Solar</h2>
          <p className="text-gray-300">
            Majisa Solar provides affordable and efficient solar energy solutions across India, focused on sustainability and savings.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-yellow-400">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/#home" className="text-gray-300 hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/#about" className="text-gray-300 hover:text-yellow-400 transition">About</Link></li>
            <li><Link to="/#services" className="text-gray-300 hover:text-yellow-400 transition">Services</Link></li>
            <li><Link to="/#projects" className="text-gray-300 hover:text-yellow-400 transition">Projects</Link></li>
            <li><Link to="/#gallery" className="text-gray-300 hover:text-yellow-400 transition">Gallery</Link></li>
            <li><Link to="/#testimonials" className="text-gray-300 hover:text-yellow-400 transition">Testimonials</Link></li>
            <li><Link to="/#faqs" className="text-gray-300 hover:text-yellow-400 transition">FAQs</Link></li>
            <li><Link to="/#contact" className="text-gray-300 hover:text-yellow-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-yellow-400">Contact Us</h2>
          <p className="text-gray-300 mb-1">
            📞 <a href="tel:8769496106" className="hover:text-yellow-400">8769496106</a>
          </p>
          <p className="text-gray-300 mb-1">
            ✉️ <a href="mailto:info@majisasolar.com" className="hover:text-yellow-400">info@majisasolar.com</a>
          </p>
          <p className="text-gray-300 mb-4">📍 Sikar, Rajasthan, India</p>

          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Majisa Solar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
