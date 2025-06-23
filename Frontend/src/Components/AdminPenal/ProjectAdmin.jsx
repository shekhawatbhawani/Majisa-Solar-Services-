import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    customer: "",
    address: "",
    city: "",
    district: "",
    state: "",
    capacity: "",
    installationType: "",
    panel: "",
    inverter: "",
    teamLead: "",
    technicians: "",
    contact: "",
    remarks: "",
  });

  const fetchProjects = async () => {
    try {
      const res = await axios.get("https://majisa-solar-services.onrender.com/api/projects");
      setProjects(res.data.reverse());
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const techniciansArray = formData.technicians.split(",").map((t) => t.trim());

    try {
      await axios.post("https://majisa-solar-services.onrender.com/api/projects", {
        ...formData,
        technicians: techniciansArray,
      });
      alert("✅ Project added successfully");
      setFormData({
        image: "",
        customer: "",
        address: "",
        city: "",
        district: "",
        state: "",
        capacity: "",
        installationType: "",
        panel: "",
        inverter: "",
        teamLead: "",
        technicians: "",
        contact: "",
        remarks: "",
      });
      fetchProjects();
    } catch (error) {
      console.error("Error adding project:", error);
      alert("❌ Failed to add project.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(`https://majisa-solar-services.onrender.com/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  return (
    <div className="p-4 bg-green-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">🔧 Manage Solar Projects</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow mb-10"
      >
        {[
          { label: "Image URL", name: "image" },
          { label: "Customer Name", name: "customer" },
          { label: "Address", name: "address" },
          { label: "City", name: "city" },
          { label: "District", name: "district" },
          { label: "State", name: "state" },
          { label: "Capacity (e.g., 5 kW)", name: "capacity" },
          { label: "Panel Details", name: "panel" },
          { label: "Inverter Model", name: "inverter" },
          { label: "Team Lead", name: "teamLead" },
          { label: "Technicians (comma-separated)", name: "technicians" },
          { label: "Contact Number", name: "contact" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm text-gray-700 mb-1">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
            />
          </div>
        ))}

        {/* Installation Type Dropdown */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Installation Type</label>
          <select
            name="installationType"
            value={formData.installationType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            required
          >
            <option value="">-- Select Type --</option>
            <option value="On-Grid">On-Grid</option>
            <option value="Off-Grid">Off-Grid</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* Remarks full width */}
        <div className="lg:col-span-3">
          <label className="block text-sm text-gray-700 mb-1">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          ></textarea>
        </div>

        {/* Submit button full width */}
        <div className="lg:col-span-3">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 w-full md:w-auto"
          >
            ➕ Add Project
          </button>
        </div>
      </form>

      {/* Projects List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white rounded-xl shadow p-4 hover:shadow-lg">
            <img src={project.image} alt={project.customer} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="font-bold text-lg text-green-700">{project.customer}</h3>
            <p className="text-sm text-gray-600 mb-1">
              {project.address}, {project.city}, {project.district}, {project.state}
            </p>
            <p className="text-sm text-gray-700">🔋 Capacity: {project.capacity}</p>
            <p className="text-sm text-gray-700">🏢 Type: {project.installationType}</p>
            <p className="text-sm text-gray-700">📦 Panel: {project.panel}</p>
            <p className="text-sm text-gray-700">🔌 Inverter: {project.inverter}</p>
            <p className="text-sm text-gray-700">👨‍🔧 Team Lead: {project.teamLead}</p>
            <p className="text-sm text-gray-700">👷 Technicians: {project.technicians?.join(", ")}</p>
            <p className="text-sm text-gray-700">📞 Contact: {project.contact}</p>
            <p className="text-sm text-gray-600 italic">📝 {project.remarks}</p>
            <button
              onClick={() => handleDelete(project._id)}
              className="text-red-600 text-sm mt-2 hover:underline"
            >
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAdmin;
