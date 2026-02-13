import { useEffect, useState } from "react";
import { isAdmin } from "../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { getPosts } from "../services/api";
import axios from "../api/axios";

export default function MyBlogs() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  // const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  // ✅ Read more
  const handleReadMore = (postId) => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      navigate(`/post/${postId}`);
    }
  };

  // ✅ Edit
  const handleEdit = (postId) => {
    navigate(`/edit-post/${postId}`);
  };

  // ✅ Delete (confirm + state update)
  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?",
    );

    if (!confirmDelete) return;

    try {
      const token = sessionStorage.getItem("token");

      await axios.delete(`http://localhost:8000/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Post deleted successfully");

      // ✅ Update UI without reload
      setPosts((prev) => prev.filter((p) => p._id !== postId));
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  return (
    <section className="px-10 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Blogs</h1>

      {posts.length === 0 && (
        <p className="text-center text-2xl">No posts yet</p>
      )}
      <div className="grid md:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="w-64 rounded-xl overflow-hidden bg-white shadow p-4"
          >
            {/* Image */}
            {post.image && (
              <img
                src={`http://localhost:8000${post.image}`}
                alt={post.title}
                className="w-full h-48 object-cover rounded"
              />
            )}

            <h2 className="mt-3 font-bold text-lg text-[#3a5a40]">
              {post.title}
            </h2>

            <p className="mt-2 text-gray-600 line-clamp-3">{post.content}</p>

            {/* ✅ ADMIN ONLY */}
            {user &&
              (post.author?._id === user._id || user.role === "admin") && (
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(post._id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(post._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              )}

            <button
              onClick={() => handleReadMore(post._id)}
              className="text-green-700 font-semibold mt-4 hover:underline"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
