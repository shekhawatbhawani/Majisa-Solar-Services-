// src/pages/admin/ViewFeedback.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("https://majisa-solar-services.onrender.com/api/feedback");
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Failed to fetch feedbacks:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://majisa-solar-services.onrender.com/api/feedback/${id}`);
      setFeedbacks((prev) => prev.filter((fb) => fb._id !== id));
    } catch (err) {
      console.error("Error deleting feedback:", err);
      alert("Failed to delete feedback.");
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">💬 User Feedback</h1>

      {loading ? (
        <p className="text-gray-600">Loading feedback...</p>
      ) : feedbacks.length === 0 ? (
        <p className="text-gray-500">No feedback found.</p>
      ) : (
        <div className="overflow-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-green-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                <th className="px-4 py-3 border">#</th>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Message</th>
                <th className="px-4 py-3 border">Rating</th>
                <th className="px-4 py-3 border">Date</th>
                <th className="px-4 py-3 border text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((fb, index) => (
                <tr key={fb._id} className="text-sm border-t hover:bg-gray-50">
                  <td className="px-4 py-3 border">{index + 1}</td>
                  <td className="px-4 py-3 border">{fb.name}</td>
                  <td className="px-4 py-3 border">{fb.message}</td>
                  <td className="px-4 py-3 border">{fb.rating} ⭐</td>
                  <td className="px-4 py-3 border">{new Date(fb.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-3 border text-center">
                    <button
                      onClick={() => handleDelete(fb._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewFeedback;
