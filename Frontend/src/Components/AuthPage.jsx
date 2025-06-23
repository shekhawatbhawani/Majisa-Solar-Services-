import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(true); // 👈 password toggle state
   const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const url = isLogin
    ? "http://localhost:5000/api/auth/login"
    : "http://localhost:5000/api/auth/signup";

  try {
    const response = await axios.post(url, formData);

    // Store token & user in localStorage after login
    if (isLogin) {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
        if (user.role === "admin") {
        navigate("/adminhome");
      } else {
        navigate("/");
      }
    } else {
      alert("Signup successful!");
       navigate("/")
    }

    // Clear form after successful action
    setFormData({ name: "", email: "", password: "" });

  } catch (error) {
    const message = error.response?.data?.message || "Something went wrong";
    alert(`${isLogin ? "Login" : "Signup"} failed: ${message}`);
    console.error(error);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-white to-green-100 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-gray-100 rounded-3xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">
          {isLogin ? "Welcome Back!" : "Join Majisa Solar"}
        </h2>

        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? "login" : "signup"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {!isLogin && (
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-green-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            )}

            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-green-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-green-400" />
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-green-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-xl hover:bg-green-700 transition"
            >
              {isLogin ? "Login" : "Signup"}
            </motion.button>
          </motion.form>
        </AnimatePresence>

        <p className="text-sm text-center mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-600 font-semibold hover:underline"
          >
            {isLogin ? "Signup here" : "Login here"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthForm;
