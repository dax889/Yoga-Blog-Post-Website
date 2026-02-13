import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostById } from "../services/api";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    getPostById(id)
      .then(setPost)
      .catch(() => navigate("/blogs"));
  }, [id, navigate]);

  if (!post) {
    return <p className="text-center mt-10">Loading yoga wisdom… 🧘‍♀️</p>;
  }

  // 🧮 Reading time (approx)
  const words = post.content.split(" ").length;
  const readingTime = Math.ceil(words / 200);

  return (
    <section className="py-10 md:py-16 bg-green-50">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate("/blogs")}
          className="mb-6 text-green-700 font-semibold hover:underline"
        >
          ← Back to Blogs
        </button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div className="max-w-lg mx-auto">
            {post.image && (
              <img
                src={`http://localhost:8000${post.image}`}
                alt={post.title}
                className="rounded-3xl object-cover w-full h-105"
              />
            )}
          </div>

          {/* Content */}
          <div className="mt-8 lg:mt-0">
            {/* Category */}
            <span className="inline-block mb-2 text-sm text-green-700 font-semibold uppercase">
              Yoga Practice
            </span>

            <h1 className="text-3xl font-bold text-[#3a5a40]">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex gap-6 text-sm text-gray-600 mt-3">
              <span>🧘 {readingTime} min read</span>
              <span>📅 {new Date(post.createdAt).toDateString()}</span>
            </div>

            <hr className="my-6 border-green-200" />

            {/* Blog Content */}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {post.content}
            </p>

            {/* Benefits */}
            <div className="mt-8 bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold text-lg text-[#3a5a40] mb-2">
                🌿 Benefits of this Practice
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Improves flexibility and posture</li>
                <li>Reduces stress and anxiety</li>
                <li>Boosts mindfulness and breathing</li>
              </ul>
            </div>

            {/* Author */}
            <p className="mt-6 text-sm text-gray-500">
              Written by <strong>{post.author?.email}</strong>
            </p>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <button
                onClick={() => navigate("/blogs")}
                className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
              >
                More Yoga Posts
              </button>

              <button
                onClick={() => alert("Coming soon 🌱")}
                className="border border-green-700 text-green-700 px-6 py-2 rounded hover:bg-green-100"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
