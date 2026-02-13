import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState("");

  // ✅ Fetch post and pre-fill
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/posts/${id}`);

        setTitle(res.data.title);
        setContent(res.data.content);
        setExistingImage(res.data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id]);

  // ✅ Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);
    try {
      await axios.put(`http://localhost:8000/api/posts/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Post updated successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  return (
  <div className="min-h-screen bg-[#f7f4ee] py-12 px-4">
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-serif text-[#3a5a40]">
          ✏️ Edit Your Yoga Post
        </h1>
        <p className="text-gray-600 mt-2">
          Refine your thoughts and update your journey
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Post Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter a calming title"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 h-44 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Share your yoga wisdom..."
            required
          />
        </div>

        {/* Existing Image */}
        {existingImage && (
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Current Cover Image
            </p>
            <div className="relative rounded-xl overflow-hidden border">
              <img
                src={`http://localhost:8000${existingImage}`}
                alt="Post"
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                Current
              </span>
            </div>
          </div>
        )}

        {/* Upload New Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Replace Image (optional)
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full text-sm text-gray-600
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:bg-green-100 file:text-green-800
              hover:file:bg-green-200"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-6 border-t">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:underline"
          >
            ← Cancel
          </button>

          <button
            type="submit"
            className="bg-[#4f6f52] text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Update Post
          </button>
        </div>

      </form>
    </div>
  </div>
);

};

export default EditPost;
