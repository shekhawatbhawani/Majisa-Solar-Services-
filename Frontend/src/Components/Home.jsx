// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { FaSolarPanel, FaCheckCircle, FaMoneyBillWave, FaTools, FaQuoteLeft } from "react-icons/fa";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section - Slider */}
      <div className="m-6">

      <ImageSlider />
      </div>

      {/* About Us */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Majisa Solar is committed to delivering sustainable and affordable solar energy solutions.
          We focus on quality service, reduced bills, and a greener future.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 shadow rounded-lg">
              <FaSolarPanel className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Rooftop Solar Installation</h3>
              <p className="text-gray-600">Affordable and efficient solar panels for homes and businesses.</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <FaTools className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Solar Maintenance</h3>
              <p className="text-gray-600">Periodic checks and cleaning for long-term efficiency.</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <FaCheckCircle className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Govt Subsidy Help</h3>
              <p className="text-gray-600">We assist in applying and claiming subsidy schemes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded shadow">
              <FaCheckCircle className="text-yellow-400 text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">Govt Approved</h4>
              <p className="text-gray-600">Authorized for government schemes and installation approvals.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <FaMoneyBillWave className="text-yellow-400 text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">Cost Saving</h4>
              <p className="text-gray-600">Cut your power bill and recover cost quickly.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <FaTools className="text-yellow-400 text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">Low Maintenance</h4>
              <p className="text-gray-600">Minimal upkeep needed with our quality systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 shadow rounded">
              <FaQuoteLeft className="text-yellow-400 text-2xl mb-2" />
              <p className="text-gray-600">Majisa Solar made the solar switch smooth. My bills dropped instantly!</p>
              <p className="text-sm text-gray-500 mt-3">– Ramesh Singh, Jaipur</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <FaQuoteLeft className="text-yellow-400 text-2xl mb-2" />
              <p className="text-gray-600">Professional and helpful team. Very happy with the rooftop solar service.</p>
              <p className="text-sm text-gray-500 mt-3">– Sunita Sharma, Sikar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Switch to Solar?</h2>
        <p className="mb-6 text-gray-300">Join the clean energy movement with Majisa Solar.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/quote" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded hover:bg-yellow-500 transition">
            Get a Free Quote
          </Link>
          <Link to="/book" className="bg-white text-gray-900 px-6 py-3 rounded hover:bg-gray-200 transition">
            Book Installation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
