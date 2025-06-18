// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { FaSolarPanel, FaCheckCircle, FaMoneyBillWave, FaTools, FaQuoteLeft } from "react-icons/fa";
import ImageSlider from "../components/ImageSlider";
import Slider from "react-slick";
import SolarBenefits from "./SolarBenefits";
import WhyGoSolar from "./WhyGoSolar";
import ProjectSlider from "./ProjectSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    message: "Majisa Solar made the solar switch smooth. My bills dropped instantly!",
    author: "Ramesh Singh, Jaipur",
  },
  {
    message: "Professional and helpful team. Very happy with the rooftop solar service.",
    author: "Sunita Sharma, Sikar",
  },
  {
    message: "Installation was quick and clean. The team guided us very well throughout.",
    author: "Anil Meena, Kota",
  },
  {
    message: "Affordable pricing and excellent support! Highly recommended.",
    author: "Pooja Verma, Ajmer",
  },
];

const Home = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-20">
      <div className="mx-10 bg-gray-700 rounded-2xl">

      <ImageSlider />
      </div>

      <SolarBenefits/>


      <ProjectSlider/>


      <WhyGoSolar/>

     

   

      {/* Why Choose Us */}
      {/* <section className="py-10">
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
      </section> */}

      {/* Testimonials */}
     <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 shadow rounded h-full">
                <FaQuoteLeft className="text-yellow-400 text-2xl mb-3" />
                <p className="text-gray-600">{testimonial.message}</p>
                <p className="text-sm text-gray-500 mt-4">– {testimonial.author}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-10 flex justify-center">
  <Link
    to="/feedback"
    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 ease-in-out"
  >
    <FaCheckCircle className="text-white text-lg" />
    Give Your Feedback
  </Link>
    </div>
      </div>
    </section>

      {/* CTA */}
    <section className="py-16 px-4 bg-white text-center">
  <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
    Ready to Switch to Solar?
  </h2>
  <p className="mb-8 text-gray-600 text-lg max-w-xl mx-auto">
    Join the clean energy movement with <span className="text-yellow-500 font-semibold">Majisa Solar</span>.
  </p>
  <div className="flex flex-col md:flex-row justify-center gap-6">
    <Link
      to="/quote"
      className="bg-yellow-400 text-white font-medium px-8 py-3 rounded-full shadow hover:bg-yellow-500 transition-all duration-300"
    >
      Get a Free Quote
    </Link>
    <Link
      to="/book"
      className="bg-gray-100 text-gray-800 font-medium px-8 py-3 rounded-full shadow hover:bg-gray-200 transition-all duration-300"
    >
      Book Installation
    </Link>
  </div>
</section>


    </div>
  );
};

export default Home;
