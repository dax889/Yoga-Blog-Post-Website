import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function DeleteRequest() {
  const { token } = useAuth();
  const [requests, setRequests] = useState([]);

  // Fetch delete requests
  useEffect(() => {
    axios
      .get("/admin/delete-requests", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Delete Requests API:", res.data);
        setRequests(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Delete request error:", err);
        setRequests([]);
      });
  }, [token]);

  // Approve delete
  const approve = async (id) => {
    await axios.put(
      `/admin/posts/${id}/approve-delete`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    setRequests((prev) => prev.filter((post) => post._id !== id));
  };

  // Reject delete
  const reject = async (id) => {
    await axios.put(
      `/admin/posts/${id}/reject-delete`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    setRequests((prev) => prev.filter((post) => post._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        🗑️ Delete Requests
      </h1>

      {requests.length === 0 && (
        <div className="text-center text-gray-500 bg-white p-6 rounded shadow">
          No delete requests pending.
        </div>
      )}

      <div className="grid gap-6">
        {requests.map((post) => (
          <div
            key={post._id}
            className="bg-white border-l-4 border-red-500 rounded-lg shadow p-5"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Author: {post.author?.name || post.author?.email}
                </p>

                <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  Pending Delete Approval
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => approve(post._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
              >
                Approve Delete
              </button>

              <button
                onClick={() => reject(post._id)}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
