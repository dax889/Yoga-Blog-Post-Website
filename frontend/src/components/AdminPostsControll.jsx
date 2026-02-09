import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

export default function AdminPosts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("user"));

  const loadPosts = async () => {
    const res = await api.get("/posts");
    setPosts(res.data);
  };
  // const handleEdit = (postId) => {
  //   navigate(`/edit-post/${postId}`);
  // };
  // const deletePost = async (id) => {
  //   if (!confirm("Delete this post?")) return;
  //   await api.delete(`/posts/${id}`);
  //   loadPosts();
  // };

  // ✅ Read more
  const handleReadMore = (postId) => {
    const token = localStorage.getItem("token");

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
      const token = localStorage.getItem("token");

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

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="p-10">
      {/* <h1 className="text-2xl font-bold mb-6">All Posts</h1>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Author</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((p) => (
            <tr key={p._id}>
              <td className="p-3 border">{p.title}</td>
              <td className="p-3 border">{p.author?.email}</td>
              <td className="p-3 border space-x-3">
                <button
                  onClick={() => handleEdit(p._id)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(p._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <div className="flex justify-center gap-4 mt-10">
        <h1
          className="px-4 py-2 rounded ${
            bg-green-600 text-white bg-gray-200"
        >
          All Posts
        </h1>
      </div>

      <section className="px-10 py-16">
        <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>

        <div className="grid md:grid-cols-4 gap-6">
          {posts.map((post) => {
            // const canEdit = user && user._id === post.author?._id;

            return (
              <div
                key={post._id}
                className="w-64 rounded-xl bg-white shadow p-4"
              >
                {post.image && (
                  <img
                    src={`http://localhost:8000${post.image}`}
                    className="w-full h-48 object-cover rounded"
                  />
                )}

                <h2 className="mt-3 font-bold">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">{post.content}</p>

                {/* ✅ THIS IS NOW CORRECT */}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(post._id)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:cursor-pointer"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(post._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:cursor-pointer"
                  >
                    Delete
                  </button>
                </div>

                <button
                  onClick={() => handleReadMore(post._id)}
                  className="text-green-700 font-semibold mt-3 hover:cursor-pointer hover:underline"
                >
                  Read More →
                </button>
                <p className="text-gray-500">By {post.author?.email}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
