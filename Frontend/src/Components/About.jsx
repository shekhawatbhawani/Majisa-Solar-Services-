import React from "react";

const teamMembers = [
  {
    role: "Account Director",
    name: "Suman Verma",
    contact: "+91 9876543210",
    description:
      "Handles financial operations and customer transactions with precision.",
    image:
      "https://imgs.search.brave.com/pzzKoO1Ei3geJcGQ2AZJ_oE_pdWw3jvVuS9o2K8TwBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NzM4NDg4My9waG90/by9wb3NpdGl2ZS1t/dWx0aS1yYWNpYWwt/Y29ycG9yYXRlLXRl/YW0tcG9zaW5nLWxv/b2tpbmctYXQtY2Ft/ZXJhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1mdld1dmdO/QkZjRUw1eV9hUHd2/U2tzZV9tcUlnaGdy/cXBYUFUyaDNvbzQw/PQ",
  },
  {
    role: "File Manager",
    name: "Ravi Meena",
    contact: "+91 9123456780",
    description:
      "Ensures all documentation and compliance records are perfectly managed.",
    image:
      "https://imgs.search.brave.com/fKcCqddYhRTovGSaSKlXRNb73kz6zhgc2uvwc9T3t2Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDcv/MTg3LzM4Ni9zbWFs/bC9wb3J0cmFpdC1v/Zi1zdWNjZXNzZnVs/LWNyZWF0aXZlLWJ1/c2luZXNzLXRlYW0t/bG9va2luZy1hdC1j/YW1lcmEtYW5kLXNt/aWxpbmctZGl2ZXJz/ZS1idXNpbmVzcy1w/ZW9wbGUtc3RhbmRp/bmctdG9nZXRoZXIt/YXQtc3RhcnR1cC1z/ZWxlY3RpdmUtZm9j/dXMtcGhvdG8uanBn",
  },
  {
    role: "Field Executive",
    name: "Anita Sharma",
    contact: "+91 9988776655",
    description:
      "Coordinates installation and field-level customer support efficiently.",
    image:
      "https://imgs.search.brave.com/MN5a0CyaD3q8DhVuDnJywZ29iT4kocukj8sMZ_kHe-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kcml2/ZXItdGVhbS1tZW1i/ZXItbG9va2luZy10/YWJsZXQtaXNvbGF0/ZWQtd2hpdGUtYmFj/a2dyb3VuZC0yNDQ0/OTc1MDMuanBn",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-900 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#0f172a]">
            About Majisa Solar
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-[#16a34a] italic">
            “Roshni Har Ghar Tak, Suraksha Prakriti Ki”
          </p>
        </div>

        {/* Our Journey */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-[#0f172a]">
            Our Journey
          </h2>
          <p className="text-lg">
            <strong>Majisa Solar</strong> was established in{" "}
            <strong>2021</strong> to provide affordable, clean solar energy to
            every home and business in India. Starting from Rajasthan, our reach
            is expanding quickly.
          </p>
          <p className="text-lg mt-4">
            Over the years, we have successfully installed numerous solar
            systems for residential homes, schools, government buildings, and
            commercial projects. Whether it’s a small rooftop or a large-scale
            plant, our expert team ensures seamless installation, system
            monitoring, and after-sales support to maximize performance and
            savings.
          </p>
          <p className="text-lg mt-4">
            Today, <strong>Majisa Solar</strong> operates across all major
            districts of Rajasthan, including Jaipur, Jodhpur, Udaipur, Bikaner,
            Ajmer, and more. Our goal is to empower every household and business
            with reliable solar energy and help build a greener, more
            sustainable future. With every project, we continue to earn trust
            through quality, transparency, and customer satisfaction.
          </p>
          <p className="mt-4 text-lg">
            We are a <strong>government-approved</strong> company aiming to
            reduce electricity bills and boost sustainable living for future
            generations.
          </p>
        </section>

        {/* Committed to Clean Energy Section */}
        <section className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/184271054/photo/commercial-solar-panels-isolated-w-clipping-path.jpg?s=612x612&w=0&k=20&c=sXVMGLPBNVuXnQsUxeWf_qSeFXHGNg9s48yyCFUBdk8="
              alt="Clean Energy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 space-y-6">
            <h2 className="text-3xl font-bold text-[#0f172a]">
              Committed to Clean Energy
            </h2>
            <p className="text-lg text-gray-700">
              We are more than just a solar installation company. Majisa Solar
              stands for quality, trust, and long-term commitment to clean,
              renewable energy. Our clients choose us for our deep expertise,
              seamless execution, and transparent processes.
            </p>

            <h3 className="text-2xl font-semibold text-[#16a34a]">
              How We Set Ourselves Apart
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>In-house technical experts with real-time monitoring.</li>
              <li>Turnkey solar project handling – from permits to power.</li>
              <li>
                Dedicated after-sales team for ongoing performance support.
              </li>
              <li>
                Government approved – trusted by homes and institutions alike.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#16a34a] mt-4">
              A History of Excellence
            </h3>
            <p className="text-gray-700">
              Since 2021, Majisa Solar has powered hundreds of sites with
              energy-efficient systems that cut costs and reduce environmental
              impact. Every system we deploy adds value not only to the customer
              but to the planet.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Vision */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <img
              src="https://imgs.search.brave.com/jiXaolwrOPVciiDMGTr6PBiyPoPXsuTr4oF442g1iIM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9zb2xhci1w/YW5lbC1lbmdpbmVl/ci13b21hbi1jaGVj/a2xpc3QtMjYwbnct/MjIyNDY5NjU4My5q/cGc"
              alt="Our Vision"
              className="w-full h-52 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-[#0f172a]">Our Vision</h2>
            <p className="text-gray-700">
              Bringing clean, sustainable solar energy to every home and business — helping families save on electricity and contribute to a greener future.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Affordable rooftop solutions for every family.</li>
              <li>Empowering self-reliant energy usage.</li>
              <li>Turning users into producers of energy.</li>
              <li>Green India, Clean Future.</li>
            </ul>
          </div>

          {/* Our Mission */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <img
              src="https://imgs.search.brave.com/ESWnoYWetnXODqeHnOCqmuo7ea4c0zFhcXyVA_nA7Zc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9vdXIt/bWlzc2lvbi15ZWxs/b3ctbGlnaHRidWxi/LXRleHQtYmxhY2ti/b2FyZC0xOTMzNjU4/NDMuanBn"
              alt="Our Mission"
              className="w-full h-52 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-[#16a34a]">Our Mission</h2>
          
              <p className="text-base md:text-lg leading-relaxed mb-3">
              To bring clean, sustainable solar energy to every home and
              business — helping families save on electricity and contribute to
              a greener future.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-3">
              We aim to make solar power accessible and affordable for all,
              transforming the way India consumes energy while reducing
              dependence on fossil fuels.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Through innovation, education, and unmatched service, our vision
              is to be a leading force in making India energy independent and
              environmentally responsible.
            </p>
          </div>
        </div>

        {/* Founder's Message */}
        <div className="bg-white text-center rounded-2xl shadow p-8">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Founder's Message
          </h2>
          <p className="text-lg">
            "Majisa Solar ka lakshya hai ki har ek ghar aur business apna khud
            ka bijli utpadan kare – humari journey customer trust aur innovation
            pe adharit hai."
          </p>
        </div>

        {/* Office & Team Photos */}
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="https://imgs.search.brave.com/TDUb_67Bbg7f7Sq-ewuM9D9PsGwQq1rws4sfse6jFXQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/MDU3MjA5NS9waG90/by9idXNpbmVzcy1w/ZW9wbGUtd29ya2lu/Zy1hdC1hLW1vZGVy/bi1vZmZpY2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN6/N2xXVkEwRGdFSkJ1/TVM1WnV5bVgzZ3lV/eUdnbUZpQjhISGlZ/amYtZWM9"
            alt="Office"
            className="w-full h-80 object-cover rounded-xl shadow"
          />
          <img
            src="https://imgs.search.brave.com/B6mpxlfojDV92pdMYO23MCfOl1VQmAnXWrqjW1uk320/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90ZWFtLWNvbW11/bmljYXRpb24tbGVh/ZGVyLXRlYW0tbWVt/YmVyXzUzODc2LTEy/MjQ5OS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw"
            alt="Team"
            className="w-full h-80 object-cover rounded-xl shadow"
          />
        </div>

        {/* Certificate Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <img src="https://imgs.search.brave.com/vyux1Wg8A9bg0on0d44bnhDOfTzs5PhYNmcfStuPVp0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzM3Lzg3LzMw/LzM2MF9GXzExMzc4/NzMwMTZfdmVYaGRR/cWlBa0ZuNFhIdGdW/WTVnRlFJY25ZT1FN/WDYuanBn" />
          <img
            src="https://imgs.search.brave.com/4k9jX_5-8-PhP4hXvLbg2b362dE7KD-llPz-GWBqrlo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvYmVh/dXRpZnVsLWNlcnRp/ZmljYXRlLXRlbXBs/YXRlLXdpdGgtd2F0/ZXJjb2xvci1zcGxh/c2hlc182OTI4Ni00/NjEuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA"
            className="w-full h-89 object-fill rounded-xl shadow"
          />
        </div>

        {/* Meet Our Team */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#0f172a]">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 shadow hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#0f172a]">
                    {member.role}
                  </h3>
                  <p className="text-[#16a34a] font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.contact}</p>
                  <p className="text-gray-700 mt-2 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
