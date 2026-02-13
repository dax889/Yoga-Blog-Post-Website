import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, requestDeletePost } from "../services/api";
import axios from "../api/axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../pages/Animations";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all"); // all | mine
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const handleReadMore = (postId) => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    else navigate(`/post/${postId}`);
  };

  const handleEdit = (postId) => {
    navigate(`/edit-post/${postId}`);
  };

  // const handleDelete = async (postId) => {
  //   if (!window.confirm("Are you sure?")) return;

  //   const token = localStorage.getItem("token");

  //   await axios.delete(`http://localhost:8000/api/posts/${postId}`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });

  //   setPosts((prev) => prev.filter((p) => p._id !== postId));
  // };
  // const handleDeleteRequest = async (postId) => {
  //   const confirm = window.confirm(
  //     "Your delete request will be sent to admin for approval.",
  //   );
  //   if (!confirm) return;

  //   try {
  //     await requestDeletePost(postId);

  //     // ✅ Update UI immediately
  //     setPosts((prev) =>
  //       prev.map((p) =>
  //         p._id === postId
  //           ? {
  //               ...p,
  //               deleteRequest: {
  //                 requested: true,
  //                 approved: null,
  //               },
  //             }
  //           : p,
  //       ),
  //     );
  //   } catch (err) {
  //     alert("Failed to send delete request");
  //   }
  // };
  const handleDeleteRequest = async (postId) => {
    const confirm = window.confirm(
      "Your delete request will be sent to admin for approval.",
    );
    if (!confirm) return;

    try {
      await requestDeletePost(postId);

      setPosts((prev) =>
        prev.map((p) =>
          p._id === postId
            ? {
                ...p,
                deleteRequest: {
                  ...p.deleteRequest,
                  requested: true,
                  approved: null,
                },
              }
            : p,
        ),
      );
    } catch (err) {
      alert("Failed to send delete request");
    }
  };

  // ✅ Filter logic
  const filteredPosts =
    filter === "mine" && user
      ? posts.filter((post) => post.author?._id === user._id)
      : posts;

  const handleLike = async (postId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.patch(
        `/posts/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setPosts((prev) =>
        prev.map((p) =>
          p._id === postId
            ? {
                ...p,
                likes: res.data.likes,
                likedBy: res.data.likedBy,
              }
            : p,
        ),
      );
    } catch (err) {
      alert("Login required to like posts");
    }
  };

  return (
    <>
      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          All Posts
        </button>

        {user && user.role === "admin" && (
          <button
            onClick={() => setFilter("mine")}
            className={`px-4 py-2 rounded ${
              filter === "mine" ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            My Posts
          </button>
        )}
      </div>

      <section className="px-10 py-16">
        <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>

        <div
          variants={staggerContainer}
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {filteredPosts.map((post) => {
            const canEdit = user && user._id === post.author?._id;

            return (
              <div
                key={post._id}
                variants={fadeUp}
                className="w-64 rounded-xl overflow-hidden bg-white shadow p-4"
              >
                {post.image && (
                  <img
                    src={`http://localhost:8000${post.image}`}
                    className="w-full h-48 object-cover rounded"
                  />
                )}

                <h2 className="mt-3 font-bold">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">{post.content}</p>
                {/* ❤️ Like Section */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    disabled={!user}
                    onClick={() => handleLike(post._id)}
                    className={`flex items-center gap-2 text-red-600 transition ${
                      user ? "hover:scale-110" : "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    {post.likedBy?.includes(user?._id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                    <span>{post.likes}</span>
                  </button>
                  {/* ✅ THIS IS NOW CORRECT */}
                  {canEdit && (
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => handleEdit(post._id)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:cursor-pointer"
                      >
                        Edit
                      </button>

                      {/* <button
                        onClick={() => handleDelete(post._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:cursor-pointer"
                      >
                        Delete
                      </button> */}
                      {post.deleteRequest?.requested ? (
                        <span className="bg-yellow-600 text-white px-3 py-1 rounded hover:cursor-pointer">
                          🕒pending
                        </span>
                      ) : (
                        <button
                          onClick={() => handleDeleteRequest(post._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:cursor-pointer"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  )}
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
    </>
  );
}
