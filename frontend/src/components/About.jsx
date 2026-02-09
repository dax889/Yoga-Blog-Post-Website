export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif font-bold text-[#3a5a40] mb-6">
        About Yoga Blog
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        Yoga Blog is a wellness-focused platform where yoga enthusiasts
        share knowledge about yoga poses, meditation, mindfulness,
        and healthy living.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Our mission is to create a calm digital space that inspires
        people to build a balanced body and peaceful mind through yoga.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 rounded-xl bg-[#edf3ee]">
          <h3 className="font-semibold text-lg mb-2">🧘 Learn Yoga</h3>
          <p className="text-sm text-gray-600">
            Beginner to advanced yoga practices explained simply.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#edf3ee]">
          <h3 className="font-semibold text-lg mb-2">📖 Read Blogs</h3>
          <p className="text-sm text-gray-600">
            Curated blogs for mental and physical wellness.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#edf3ee]">
          <h3 className="font-semibold text-lg mb-2">🌿 Community</h3>
          <p className="text-sm text-gray-600">
            Share experiences and learn from others.
          </p>
        </div>
      </div>
    </div>
  )
}

