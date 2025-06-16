import React from "react";
import {
  FaSolarPanel,
  FaTools,
  FaBatteryFull,
  FaWater,
  FaFileInvoiceDollar,
  FaHandshake,
} from "react-icons/fa";

const services = [
  {
    title: "Solar Panel Installation",
    icon: <FaSolarPanel size={40} className="text-green-600" />,
    description:
      "Residential, commercial, and industrial solar panel system installations with expert planning and execution.",
  },
  {
    title: "Solar Maintenance Services",
    icon: <FaTools size={40} className="text-green-600" />,
    description:
      "Regular inspections, cleaning, and system checks to ensure your solar setup works efficiently year-round.",
  },
  {
    title: "Solar Battery Setup",
    icon: <FaBatteryFull size={40} className="text-green-600" />,
    description:
      "Battery backup systems to store solar energy for nighttime or emergency use, increasing reliability.",
  },
  {
    title: "Solar Water Pump Installation",
    icon: <FaWater size={40} className="text-green-600" />,
    description:
      "Eco-friendly solar-powered water pumps for agricultural, household, and industrial water solutions.",
  },
  {
    title: "Net Metering & Govt Subsidy",
    icon: <FaFileInvoiceDollar size={40} className="text-green-600" />,
    description:
      "We assist in net metering setup and documentation for availing government subsidies and savings.",
  },
  {
    title: "AMC (Annual Maintenance Contract)",
    icon: <FaHandshake size={40} className="text-green-600" />,
    description:
      "Affordable AMC plans for year-long maintenance and support with guaranteed system uptime.",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-[#0f172a]">Our Solar Services</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer a complete range of solar solutions that empower homes, farms, and businesses across Rajasthan and beyond.
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300 border border-green-100"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-center text-green-700">
                {service.title}
              </h3>
              <p className="text-gray-700 text-center mt-3 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl p-10 shadow-md">
          <h3 className="text-3xl font-bold mb-4">Why Choose Majisa Solar?</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Government Approved Vendor</li>
            <li>End-to-End Solar Project Support</li>
            <li>Transparent Pricing and AMC Plans</li>
            <li>Expert Installation and Fast Service</li>
            <li>24x7 Customer Support and Guidance</li>
          </ul>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-10 items-center">
          <img
            src="https://imgs.search.brave.com/BbY2gzQmM7O_2dZ3QGgJQJj8wz967YT673WQZ-MgfxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMx/MzA4OTIwL3Bob3Rv/L3Bob3Rvdm9sdGFp/Yy1wYW5lbHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW9j/SW10cExRZzltMHR5/NzFUMGpIUTJhV29C/WDZuQWZHc2sxOU9p/d2RDYnM9"
            alt="Solar Panels"
            className="rounded-xl w-full lg:w-1/2 shadow-lg"
          />
          <div className="w-full lg:w-1/2 space-y-5">
            <h3 className="text-4xl font-extrabold text-[#0f172a]">
              Committed to Clean Energy
            </h3>
            <p className="text-gray-700">
              At Majisa Solar, we go beyond just installation. Our commitment lies in ensuring every system runs at peak performance. From the first consultation to post-installation service, your satisfaction is our priority.
            </p>
            <p className="text-gray-700">
              Our expert team regularly updates clients on new technologies, government schemes, and best practices to help them save more and live greener.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;