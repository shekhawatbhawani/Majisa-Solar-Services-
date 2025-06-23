import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewContacts = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("https://majisa-solar-services.onrender.com/api/contact");
        setMessages(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch contact messages:", err);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">📨 Contact Messages</h1>

      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No contact messages found.</p>
      ) : (
        <div className="overflow-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-green-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                <th className="px-4 py-3 border">#</th>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Email</th>
                <th className="px-4 py-3 border">Phone</th>
                <th className="px-4 py-3 border">Message</th>
                <th className="px-4 py-3 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={msg._id} className="text-sm border-t">
                  <td className="px-4 py-3 border">{index + 1}</td>
                  <td className="px-4 py-3 border">{msg.name}</td>
                  <td className="px-4 py-3 border">{msg.email}</td>
                  <td className="px-4 py-3 border">{msg.phone}</td>
                  <td className="px-4 py-3 border">{msg.message}</td>
                  <td className="px-4 py-3 border">{new Date(msg.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewContacts;
