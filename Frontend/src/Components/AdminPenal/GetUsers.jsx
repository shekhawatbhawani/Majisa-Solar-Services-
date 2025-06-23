import React, { useEffect, useState } from "react";
import axios from "axios";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // loader
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch from your API endpoint
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/getUser");
        setUsers(response.data); // adjust as per your API response structure
      } catch (err) {
        setError("Failed to fetch users");
        console.error("❌ Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen p-6 md:p-12 bg-green-50">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          All Users
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading users...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-center border border-gray-300">
              <thead className="bg-green-100">
                <tr>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Mobile</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id || index}>
                    <td className="py-2 px-4 border-b">{user._id || index + 1}</td>
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetUsers;
