import { useParams, useNavigate } from "react-router-dom";

const topics = [
  {
    id: 1,
    category: "Sustainable Living",
    title: "Top 10 Eco-Friendly Yoga Mats for 2026",
    desc: "Explore sustainable yoga mats that are good for your practice and the planet.",
    content:
      "Eco-friendly yoga mats are made from natural rubber, cork, jute, and recycled materials. They reduce environmental impact while offering excellent grip and durability.",
    icon: "🌱",
  },
  {
    id: 2,
    category: "Mental Health",
    title: "Yoga Therapy for Managing Work Stress in 2026",
    desc: "How mindful movement and breath can reduce burnout and anxiety.",
    content:
      "Yoga therapy combines breathwork, mindfulness, and gentle movement to calm the nervous system and reduce cortisol levels caused by work stress.",
    icon: "🧠",
  },
  // (add others later)
];

export default function TopicDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const topic = topics.find((t) => t.id === Number(id));

  if (!topic) {
    return <p className="text-center mt-10">Topic not found</p>;
  }

  return (
    <section className="py-16 bg-[#f7f4ee]">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="text-green-700 mb-6 hover:underline"
        >
          ← Back
        </button>

        <div className="bg-white p-8 rounded-2xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{topic.icon}</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              {topic.category}
            </span>
          </div>

          <h1 className="text-3xl font-serif text-green-800 mb-4">
            {topic.title}
          </h1>

          <p className="text-gray-700 leading-relaxed">
            {topic.content}
          </p>
        </div>
      </div>
    </section>
  );
}
