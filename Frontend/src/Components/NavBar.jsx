import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import {
  FaHome,
  FaInfoCircle,
  FaTools,
  FaProjectDiagram,
  FaImages,
  FaCommentDots,
  FaQuestionCircle,
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const mobileLinkStyle =
    "flex items-center gap-3 pl-3 pt-5 hover:text-yellow-400 justify-start text-[17px] font-medium";

  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Majisa Solar"
            className="h-10 w-25 object-cover rounded-xl"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-yellow-400 transition">
            Services
          </Link>
          <Link to="/projects" className="hover:text-yellow-400 transition">
            Projects
          </Link>
          {/* <Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link> */}
          <Link to="/testimonials" className="hover:text-yellow-400 transition">
            Testimonials
          </Link>
          <Link to="/faq" className="hover:text-yellow-400 transition">
            FAQs
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
          <Link to="/signup" className="hover:text-yellow-400 transition">
            Signup
          </Link>
        </div>

        {/* Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-[100vh] mt-7 bg-gray-900 px-4 pb-4 space-y-3 text-white">
          <Link to="/" onClick={closeMenu} className={mobileLinkStyle}>
            <FaHome className="text-lg font-bold" /> Home
          </Link>
          <Link to="/about" onClick={closeMenu} className={mobileLinkStyle}>
            <FaInfoCircle className="text-lg font-bold" /> About
          </Link>
          <Link to="/services" onClick={closeMenu} className={mobileLinkStyle}>
            <FaTools className="text-lg font-bold" /> Services
          </Link>
          <Link to="/projects" onClick={closeMenu} className={mobileLinkStyle}>
            <FaProjectDiagram className="text-lg font-bold" /> Projects
          </Link>
          {/* <Link to="/gallery" onClick={closeMenu} className={mobileLinkStyle}>
            <FaImages className="text-lg font-bold" /> Gallery
          </Link> */}
          <Link
            to="/testimonials"
            onClick={closeMenu}
            className={mobileLinkStyle}
          >
            <FaCommentDots className="text-lg font-bold" /> Testimonials
          </Link>
          <Link to="/faq" onClick={closeMenu} className={mobileLinkStyle}>
            <FaQuestionCircle className="text-lg font-bold" /> FAQs
          </Link>
          <Link to="/contact" onClick={closeMenu} className={mobileLinkStyle}>
            <FaEnvelope className="text-lg font-bold" /> Contact
          </Link>
          <Link to="/signup" onClick={closeMenu} className={mobileLinkStyle}>
            <FaUserPlus className="text-lg font-bold" /> Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
