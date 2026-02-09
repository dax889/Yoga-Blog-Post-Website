
import { useNavigate } from "react-router-dom";

const topics = [
  {
    id: 1,
    category: "Sustainable Living",
    title: "Top 10 Eco-Friendly Yoga Mats for 2026",
    desc: "Explore sustainable yoga mats that are good for your practice and the planet.",
    icon: "🌱",
  },
  {
    id: 2,
    category: "Mental Health",
    title: "Yoga Therapy for Managing Work Stress in 2026",
    desc: "How mindful movement and breath can reduce burnout and anxiety.",
    icon: "🧠",
  },
  {
    id: 3,
    category: "Niche Practices",
    title: "Introduction to ‘Broga’ (Yoga for Men)",
    desc: "Breaking stereotypes and making yoga accessible for everyone.",
    icon: "💪",
  },
  {
    id: 4,
    category: "Technology & Wellness",
    title: "Best Yoga Wearables to Monitor Your Posture in 2026",
    desc: "Smart devices that improve alignment and prevent injury.",
    icon: "⌚",
  },
  {
    id: 5,
    category: "Accessible Yoga",
    title: "Chair Yoga for Office Workers",
    desc: "Simple movements you can do right at your desk.",
    icon: "🪑",
  },
  {
    id: 6,
    category: "Expert Guides",
    title: "The Science of Pranayama: How Breathing Affects the Brain",
    desc: "A science-backed look at breathwork and mental clarity.",
    icon: "🫁",
  },
];

export default function TrendingTopics() {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-[#f7f4ee]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-green-800 mb-3">
            🔥 Trending Yoga Topics for 2026
          </h2>
          <p className="text-gray-600">
            Discover what’s shaping the future of wellness and mindful living
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

              <button
                onClick={() => navigate(`/topics/${item.id}`)}
                className="text-green-700 font-semibold hover:underline"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
