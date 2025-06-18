import React from "react";

const teamMembers = [
  {
    role: "Account Director",
    name: "Suman Verma",
    contact: "+91 9876543210",
    description: "Handles financial operations and customer transactions with precision.",
    image:
      "https://imgs.search.brave.com/zMaVj3oZaOqcm7UWRH5UeCBrMJqdb9tO160PCr6PyOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/ZW8tY29tcGFueV8x/MDk4LTIxMTA3Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA",
  },
  {
    role: "File Manager",
    name: "Ravi Meena",
    contact: "+91 9123456780",
    description: "Ensures all documentation and compliance records are perfectly managed.",
    image:
      "https://imgs.search.brave.com/I4ys-5q6vtYfI3OcD5qKgyJtfQOp5vIxRWSGrk1cexo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzg0LzcwLzc2/LzM2MF9GXzU4NDcw/NzY1N192MU1lQnc1/ZUVwUlBhbW9oRjhp/eUlJZ2VPeGliZmFP/Zi5qcGc",
  },
  {
    role: "Field Executive",
    name: "Anita Sharma",
    contact: "+91 9988776655",
    description: "Coordinates installation and field-level customer support efficiently.",
    image:
      "https://imgs.search.brave.com/_XdPYEzrUJGcoxQcfl7-95QJYTveCxLe30rmWsyS_14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mZW1h/bGUtY29tcGFueS1j/ZW8tYmVhdXRpZnVs/LWNvbmZpZGVudC1z/dGFuZGluZy1iZWhp/bmQtaGVyLW9mZmlj/ZS1jaGFpci1sb29r/aW5nLWNhbWVyYS0x/Mzk5ODE4OTEuanBn",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-900 pt-16 px-4 md:px-10 space-y-20">
      {/* Header */}
      <div className="text-center mb-0">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          <span className="text-[#15803d]">About</span> Majisa Solar
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-[#065f46] italic font-medium">
          “Roshni Har Ghar Tak, Suraksha Prakriti Ki”
        </p>
      </div>

      {/* Journey Section */}
      <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 md:p-14">
        <h2 className="text-4xl font-extrabold text-center text-[#0f172a] mb-2">Our Journey</h2>
        <p className="text-center text-[#16a34a] italic text-lg sm:text-xl mb-6">
          Powering Dreams Since 2018
        </p>
        <div className="space-y-5 text-gray-800 text-base sm:text-lg">
          <p>
            <strong>Majisa Solar</strong> was founded in <strong>2018</strong> with a mission to deliver clean,
            affordable solar energy to every household and business across India.
          </p>
          <p>
            With over <strong>1000+ projects</strong> completed, we’ve helped schools, homes, and businesses across
            Rajasthan with smart solar setups and real-time monitoring.
          </p>
          <p>
            Our company is <strong>government-approved</strong> and trusted for quality, transparency, and long-term service
            support.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t text-start text-gray-600 text-sm sm:text-base">
          <p><strong>Owner:</strong> Devender Singh Shekhawat</p>
          <p><strong>Contact:</strong> +91 87694 96106</p>
          <p><strong>Address:</strong> Didwana Road, in front of Delhi Hospital, Losal, Sikar, Rajasthan</p>
        </div>
      </section>

      {/* Why Attend & What to Expect */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-[#0f172a]">Why Attend?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Discover the benefits of solar power for your home or business.</li>
            <li>Get expert advice on installation and subsidies.</li>
            <li>Meet our team and see real project demos.</li>
            <li>Take a step towards energy independence.</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-[#0f172a]">What to Expect:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Live product displays and solar panel walkthroughs.</li>
            <li>Q&A sessions with certified engineers.</li>
            <li>On-spot site evaluations & bookings.</li>
            <li>Exclusive offers and consultation sessions.</li>
          </ul>
        </div>
      </section>

      {/* Office & Team Photos */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#0f172a]">Office & Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="https://imgs.search.brave.com/Ewetej2LYtnYMN7Ia_03cwL6VAPMGGA2G9x-wgj_m0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/OC8wNS8xMS8wNS9i/dXNpbmVzcy1wZW9w/bGUtMTU3MjA1OV82/NDAuanBn"
            alt="Office"
            className="w-full h-80 object-cover rounded-xl shadow"
          />
          <img
            src="https://imgs.search.brave.com/BpG7sjB7baxXdiFMdmzbMTEwcGJ3v0o3hgWyK6QgpYU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTEv/MjAyLzA0OC9zbWFs/bC9zdWNjZXNzZnVs/LXRlYW0tb2YtYnVz/aW5lc3MtZXhwZXJ0/cy1wb3NpbmctaW4t/YW4tb2ZmaWNlLXNw/YWNlLXBvc2l0aXZl/LWFuZC1jb25maWRl/bnQtcGhvdG8uanBn"
            alt="Team"
            className="w-full h-80 object-cover rounded-xl shadow"
          />
        </div>
      </section>

      {/* Certificate Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#0f172a]">Certificates & Recognition</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Our certifications reflect our credibility and compliance with government and environmental standards.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="https://imgs.search.brave.com/1bkYoAyieueOp_zXj-FGJr-vkRZG84NBCj5-89lP2Mc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9zaHV0dGVy/c3RvY2svcGhvdG9z/LzE5MzAwNDAxMTQv/ZGlzcGxheV8xNTAw/L3N0b2NrLXZlY3Rv/ci1tb2Rlcm4tY2Vy/dGlmaWNhdGUtdGVt/cGxhdGUtdmVjdG9y/LWRlc2lnbi0xOTMw/MDQwMTE0LmpwZw"
            alt="Certificate 1"
            className="w-full h-[380px] object-contain rounded-xl shadow"
          />
          <img
            src="https://imgs.search.brave.com/BiEGsZWnbzkAdHjS99w52RqJfPwZ-Qisv2YpUDOrDVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGbFZE/emI3c0EvMy8wLzE2/MDB3L2NhbnZhLXdo/aXRlLWdvbGQtZWxl/Z2FudC1tb2Rlcm4t/Y2VydGlmaWNhdGUt/b2YtcGFydGljaXBh/dGlvbi1RbjRSZWkx/NDFNTS5qcGc"
            alt="Certificate 2"
            className="w-full h-[380px] object-contain rounded-xl shadow"
          />
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 shadow hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#0f172a]">{member.role}</h3>
                <p className="text-[#16a34a] font-semibold">{member.name}</p>
                <p className="text-sm text-gray-600">{member.contact}</p>
                <p className="text-gray-700 mt-2 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
