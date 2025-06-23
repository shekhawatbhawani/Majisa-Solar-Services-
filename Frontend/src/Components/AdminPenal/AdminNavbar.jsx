import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import {
  FaProjectDiagram,
  FaUsers,
  FaUserTie,
  FaComments,
  FaUserShield,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const AdminNavbar = () => {
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
            <Link to="/adminhome"> <img
            src={logo}
            alt="Admin Logo"
            className="h-10 w-25 object-cover rounded-xl"
          /></Link>
         
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/admin/projects" className="hover:text-yellow-400 transition">
            Projects
          </Link>
          <Link to="/admin/customers" className="hover:text-yellow-400 transition">
            Customers
          </Link>
          <Link to="/admin/employees" className="hover:text-yellow-400 transition">
            Employees
          </Link>
          <Link to="/admin/feedback" className="hover:text-yellow-400 transition">
            Feedback
          </Link>
          <Link to="/admin/users" className="hover:text-yellow-400 transition">
            Users
          </Link>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-[100vh] mt-7 bg-gray-900 px-4 pb-4 space-y-3 text-white">
          <Link to="/admin/projects" onClick={closeMenu} className={mobileLinkStyle}>
            <FaProjectDiagram /> Projects
          </Link>
          <Link to="/admin/customers" onClick={closeMenu} className={mobileLinkStyle}>
            <FaUsers /> Customers
          </Link>
          <Link to="/admin/employees" onClick={closeMenu} className={mobileLinkStyle}>
            <FaUserTie /> Employees
          </Link>
          <Link to="/admin/feedback" onClick={closeMenu} className={mobileLinkStyle}>
            <FaComments /> Feedback
          </Link>
          <Link to="/admin/users" onClick={closeMenu} className={mobileLinkStyle}>
            <FaUserShield /> Users
          </Link>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
