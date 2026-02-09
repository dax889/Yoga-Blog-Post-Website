import { useState } from "react";
import api from "../api/axios";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      await api.post("/posts", formData);

      alert("🧘 Post Published!");
      setTitle("");
      setContent("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Publish failed");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-2">
          Create a New Yoga Post
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Share your knowledge, poses & mindfulness 🌿
        </p>

        <form onSubmit={submitHandler} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Pose Title
            </label>
            <input
              type="text"
              placeholder="e.g. Surya Namaskar"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Pose Description
            </label>
            <textarea
              placeholder="Describe the benefits, steps, and breathing..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Upload Image (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border rounded-lg p-2"
            />

            {image && (
              <p className="text-sm text-green-700 mt-2">
                📷 Selected: {image.name}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
          >
            Publish Yoga Post 🧘
          </button>
        </form>
      </div>
    </div>
  );
}
