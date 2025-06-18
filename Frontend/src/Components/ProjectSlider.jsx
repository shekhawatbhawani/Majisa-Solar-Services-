import React from "react";
import Slider from "react-slick";
import { FaPhone, FaUserTie, FaToolbox } from "react-icons/fa";
const projects = [
  {
    image:
      "https://imgs.search.brave.com/dMraFchEmPWBUtMxxEsc6sLRdtd8X46ZFcsx6L_PMOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgxLzY3LzU2/LzM2MF9GXzU4MTY3/NTYwM19vS0g1TXJ6/aW9wNHUxdXVEbzUz/MnpidWVNeGZ0N0RV/Ty5qcGc",
    customer: "Rajesh Sharma",
    address: "42 Green Street, Nehru Nagar",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    capacity: "5 kW",
    installationType: "Residential",
    panel: "Waaree 450W x 12",
    inverter: "Luminous NXG 1800",
    teamLead: "Ankit Meena",
    technicians: ["Sunil", "Vikas"],
    contact: "9876543210",
    remarks: "Smooth installation, minor delay due to rain"
  },
  {
    image:
      "https://imgs.search.brave.com/phjcgPlR55p0n626Yibeu-ScCCyxIJ2iAvCpRvaO6MU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzI5LzE5Lzgy/LzM2MF9GXzEwMjkx/OTgyMzBfSFlvazF1/MGZVN0dGejJad2tr/U2JBbVk4b3pnZFRZ/WWMuanBn",
    customer: "Pooja Verma",
    address: "22 Pink Towers, MG Road",
    city: "Udaipur",
    district: "Udaipur",
    state: "Rajasthan",
    capacity: "3 kW",
    installationType: "Commercial",
    panel: "Adani 540W x 6",
    inverter: "Growatt 3kW",
    teamLead: "Rohit Shekhawat",
    technicians: ["Manoj", "Deepak"],
    contact: "8765432109",
    remarks: "Inverter setup issue resolved onsite"
  },
  {
    image:
      "https://imgs.search.brave.com/lxt1sQMDkCah3N2EnTane6GqlwZxYY8w2xm3fjg1DR0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzc4LzI1LzY3/LzM2MF9GXzEwNzgy/NTY3NDlfcnRNRHpM/SGUyRzdrcnE1aWxu/ajMwR3RyR0hVTWZE/RWEuanBn",
    customer: "Mohit Yadav",
    address: "Plot 18, Industrial Area, Road No. 5",
    city: "Kota",
    district: "Kota",
    state: "Rajasthan",
    capacity: "10 kW",
    installationType: "Industrial",
    panel: "Tata Power Solar 500W x 20",
    inverter: "Sungrow 10kW",
    teamLead: "Sandeep Tanwar",
    technicians: ["Harish", "Yogesh", "Kailash"],
    contact: "9988776655",
    remarks: "Completed before deadline"
  }
];

const ProjectSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="bg-gray-100 py-10 px-4 mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#16a34a] mb-6">
        Recent Installations
      </h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-5">
            <div className="bg-white rounded-2xl shadow-md max-w-md w-full">
              <img
                src={project.image}
                alt="Solar Installation"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#16a34a] mb-1">{project.customer}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {project.address}, {project.city}, {project.district}, {project.state}
                </p>
                <div className="text-sm text-gray-700 mb-1">
                  <strong>Capacity:</strong> {project.capacity}
                </div>
                <div className="text-sm text-gray-700 mb-1">
                  <strong>Type:</strong> {project.installationType}
                </div>
                <div className="text-sm text-gray-700 mb-1">
                  <strong>Panel:</strong> {project.panel}
                </div>
                <div className="text-sm text-gray-700 mb-1">
                  <strong>Inverter:</strong> {project.inverter}
                </div>
                <hr className="my-2" />
                <div className="text-sm text-gray-700 flex items-center gap-2">
                  <FaUserTie className="text-green-700" /> <strong>Team Lead:</strong> {project.teamLead}
                </div>
                <div className="text-sm text-gray-700 flex items-center gap-2">
                  <FaToolbox className="text-green-700" /> <strong>Technicians:</strong> {project.technicians.join(", ")}
                </div>
                <div className="text-sm text-gray-700 flex items-center gap-2">
                  <FaPhone className="text-green-700" /> <strong>Contact:</strong> {project.contact}
                </div>
                <div className="text-sm text-gray-700 mt-1">
                  <strong>Remarks:</strong> {project.remarks}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
