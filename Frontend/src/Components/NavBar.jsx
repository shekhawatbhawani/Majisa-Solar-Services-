import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Majisa Solar"
            className="h-10 w-20 object-cover rounded-xl"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/services" className="hover:text-yellow-400 transition">Services</Link>
          <Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link>
          <Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
          <Link to="/testimonials" className="hover:text-yellow-400 transition">Testimonials</Link>
          <Link to="/faq" className="hover:text-yellow-400 transition">FAQs</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </div>

        {/* Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 space-y-2 text-white">
          <Link to="/" className="block hover:text-yellow-400">Home</Link>
          <Link to="/about" className="block hover:text-yellow-400">About</Link>
          <Link to="/services" className="block hover:text-yellow-400">Services</Link>
          <Link to="/projects" className="block hover:text-yellow-400">Projects</Link>
          <Link to="/gallery" className="block hover:text-yellow-400">Gallery</Link>
          <Link to="/testimonials" className="block hover:text-yellow-400">Testimonials</Link>
          <Link to="/faq" className="block hover:text-yellow-400">FAQs</Link>
          <Link to="/contact" className="block hover:text-yellow-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
