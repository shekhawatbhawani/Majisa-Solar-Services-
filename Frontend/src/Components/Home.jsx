import React from "react";
import { Link } from "react-router-dom";
// import heroImg from "../assets/Images/hero.jpg";
import { FaSolarPanel, FaCheckCircle, FaMoneyBillWave, FaTools, FaQuoteLeft } from "react-icons/fa";

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <img
          src="https://img.freepik.com/premium-photo/mother-with-her-little-son-by-solar-panels_255667-68451.jpg"
          alt="Solar Energy"
          className="w-full h-[70vh] object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center px-4">
            Power Your Life with Solar Energy
          </h1>
        </div>
      </section>

      {/* About Us */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Majisa Solar is committed to delivering sustainable and affordable solar energy solutions. With a focus on quality service and customer satisfaction, we help you reduce electricity bills and promote a greener future. Trusted across India for efficient solar installations.
        </p>
      </section>

      {/* Services Highlights */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 shadow rounded-lg">
              <FaSolarPanel className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Rooftop Solar Installation</h3>
              <p className="text-gray-600">Efficient and affordable rooftop solar panel installations for homes and businesses.</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <FaTools className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Solar Maintenance</h3>
              <p className="text-gray-600">Regular checks and cleaning to ensure maximum efficiency and lifespan of your solar setup.</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <FaCheckCircle className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Government Subsidy Assistance</h3>
              <p className="text-gray-600">We help you navigate and avail benefits under approved solar subsidy schemes.</p>
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
              <p className="text-gray-600">Authorized for government solar panel schemes and installations.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <FaMoneyBillWave className="text-yellow-400 text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">Cost Saving</h4>
              <p className="text-gray-600">Reduce your electricity bills significantly and recover investment fast.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <FaTools className="text-yellow-400 text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">Maintenance Free</h4>
              <p className="text-gray-600">Our systems are built to last with minimal maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow rounded text-left">
              <FaQuoteLeft className="text-yellow-400 text-2xl mb-2" />
              <p className="text-gray-600">Majisa Solar made switching to solar easy. The installation was smooth and my energy bills dropped instantly!</p>
              <p className="text-sm text-gray-500 mt-3">– Ramesh Singh, Jaipur</p>
            </div>
            <div className="bg-white p-6 shadow rounded text-left">
              <FaQuoteLeft className="text-yellow-400 text-2xl mb-2" />
              <p className="text-gray-600">Professional team and excellent service. Highly recommend their rooftop solar solutions.</p>
              <p className="text-sm text-gray-500 mt-3">– Sunita Sharma, Sikar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Switch to Solar?</h2>
        <p className="mb-6 text-gray-300">Join the solar revolution with Majisa Solar and enjoy reliable, clean energy.</p>
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
