import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPosts } from "../services/api";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TrendingTopics from "../components/TrendingTopics";
import axios from "../api/axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../pages/Animations";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleReadMore = (postId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      navigate(`/post/${postId}`);
    }
  };
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);
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

  const trendingTopics = [
    {
      title: "Sustainable Living",
      description:
        "Top 10 Eco-Friendly Yoga Mats for 2026 & practicing zero-waste wellness.",
    },
    {
      title: "Mental Health",
      description:
        "Yoga therapy for managing work stress and 5-minute mindfulness for anxiety.",
    },
    {
      title: "Niche Practices",
      description:
        "Introduction to Broga (Yoga for Men) and how aerial yoga improves core strength.",
    },
    {
      title: "Technology & Wellness",
      description:
        "Best yoga wearables to monitor posture and improve practice in 2026.",
    },
    {
      title: "Accessible Yoga",
      description:
        "Chair yoga for office workers and beginner-friendly 10-minute morning rituals.",
    },
    {
      title: "Expert Guides",
      description:
        "The science of pranayama and how breathing techniques affect the brain.",
    },
  ];

  return (
    <>
      <Hero />
      <Features />
      <section className="px-10 py-16 mt-4">
        <div className="flex justify-between items-center mb-6 ">
          <h2 className="text-3xl font-serif text-[#3a5a40]">
            Latest Yoga Blogs
          </h2>
          <a
            href="/blogs"
            className="bg-[#4f6f52] text-white px-4 py-2 rounded-lg"
          >
            Browse All →
          </a>
        </div>

        {posts.length === 0 && (
          <p className="text-center text-2xl">No posts yet</p>
        )}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {posts.map((post) => (
            <motion.div
              key={post._id}
              variants={fadeUp}
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
              {/* <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                category
              </span> */}
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
                <button
                  onClick={() => handleReadMore(post._id)}
                  className="text-green-700 font-semibold mt-4 hover:underline hover:cursor-pointer"
                >
                  Read More →
                </button>
              </div>
              <p className="relative bottom-0 text-sm text-gray-500 mt-2">
                By {post.author?.email}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* <div className="w-full"> */}
      {/* 🔥 Trending Blog Topics Section */}
      {/* <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Trending Blog Topics for 2026
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Explore what’s shaping the future of yoga, wellness, and mindful living.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trendingTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-700">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div> */}
      <TrendingTopics />
      <section className="bg-[#eef4ed] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#3a5a40] mb-4">
            Why Yoga Matters 🌿
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Yoga is more than movement — it’s a lifestyle that builds strength,
            flexibility, mental clarity, and emotional balance. Our blog helps
            you integrate yoga into modern life with practical guidance and
            inspiration.
          </p>

          <div
            variants={fadeUp}
            // initial="hidden"
            animate="visible"
            className="grid md:grid-cols-4 gap-6 mt-4"
          >
            <div className="bg-white p-6 rounded-xl shadow">
              🧘‍♀️
              <h3 className="font-semibold mt-3">Mind–Body Balance</h3>
              <p className="text-sm text-gray-600">
                Improve focus, reduce stress, and feel grounded every day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              💪
              <h3 className="font-semibold mt-3">Strength & Flexibility</h3>
              <p className="text-sm text-gray-600">
                Build a strong, flexible body through mindful practice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              🌱
              <h3 className="font-semibold mt-3">Sustainable Living</h3>
              <p className="text-sm text-gray-600">
                Align your wellness journey with eco-friendly choices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#4f6f52] py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">
            Join Our Yoga Community 🧘
          </h2>
          <p className="mb-6">
            Get weekly yoga tips, mindful living guides, and exclusive content
            straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded text-black w-full sm:w-80"
            />
            <button className="bg-white text-[#4f6f52] px-6 py-3 rounded font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#f7f4ee]">
        <h2 className="text-3xl font-serif text-center text-[#3a5a40] mb-10">
          What Our Readers Say
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            "This blog helped me start yoga without fear.",
            "Simple, practical, and calming content.",
            "Perfect balance of wellness and science.",
          ].map((quote, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600 italic">“{quote}”</p>
              <p className="mt-4 font-semibold text-[#3a5a40]">— John Smith</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
