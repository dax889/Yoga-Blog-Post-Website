import { motion } from "framer-motion";
import {
  fadeIn,
  fadeUpSoft,
  staggerSlow,
  heroZoom,
} from "../../pages/Animations";

// export default function About() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-16">
//       <h1 className="text-4xl font-serif font-bold text-[#3a5a40] mb-6">
//         About Yoga Blog
//       </h1>

//       <p className="text-gray-700 leading-relaxed mb-6">
//         Yoga Blog is a wellness-focused platform where yoga enthusiasts
//         share knowledge about yoga poses, meditation, mindfulness,
//         and healthy living.
//       </p>

//       <p className="text-gray-700 leading-relaxed mb-6">
//         Our mission is to create a calm digital space that inspires
//         people to build a balanced body and peaceful mind through yoga.
//       </p>

//       <div className="grid md:grid-cols-3 gap-6 mt-10">
//         <div className="p-6 rounded-xl bg-[#edf3ee]">
//           <h3 className="font-semibold text-lg mb-2">🧘 Learn Yoga</h3>
//           <p className="text-sm text-gray-600">
//             Beginner to advanced yoga practices explained simply.
//           </p>
//         </div>

//         <div className="p-6 rounded-xl bg-[#edf3ee]">
//           <h3 className="font-semibold text-lg mb-2">📖 Read Blogs</h3>
//           <p className="text-sm text-gray-600">
//             Curated blogs for mental and physical wellness.
//           </p>
//         </div>

//         <div className="p-6 rounded-xl bg-[#edf3ee]">
//           <h3 className="font-semibold text-lg mb-2">🌿 Community</h3>
//           <p className="text-sm text-gray-600">
//             Share experiences and learn from others.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
export default function About() {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative h-[70vh] flex items-center justify-center"
      >
        <motion.img
          variants={heroZoom}
          initial="hidden"
          animate="visible"
          src="/Yogaimage1.jpeg"
          alt="Yoga in nature"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Transform Daily Stress into Strength
          </h1>
          <p className="text-lg text-gray-200">
            Accessible yoga, mindful living, and modern wellness for real people
            in 2026.
          </p>
        </motion.div>
      </motion.section>

      {/* ================= AUTHOR JOURNEY ================= */}
      <motion.section
        variants={fadeUpSoft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-serif font-bold text-[#3a5a40] mb-6">
          My Journey into Yoga
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-gray-700 leading-relaxed">
            Before yoga, life was fast, loud, and overwhelming. Long workdays,
            constant screen time, and burnout became the norm. Yoga entered my
            life not as fitness — but as survival.
            <br />
            <br />
            One quiet morning practice changed everything. Breath slowed the
            mind. Movement healed the body. Yoga became a lifelong companion.
            Today, with certifications like <strong>RYT-200</strong> and
            Therapeutic Yoga training, my mission is simple:
            <br />
            <br />
            <span className="font-semibold text-[#3a5a40]">
              Help modern humans find calm, strength, and balance — one practice
              at a time.
            </span>
          </p>

          <motion.div
            variants={fadeUpSoft}
            className="bg-[#edf3ee] p-8 rounded-2xl"
          >
            <h3 className="font-semibold text-lg mb-4">
              ✨ My Mission for 2026
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>🧘 Yoga for busy lifestyles</li>
              <li>🧠 Trauma-informed & mental-health aware practices</li>
              <li>🌿 Sustainable & inclusive wellness</li>
              <li>📱 Blending yoga with modern technology</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <section className="bg-[#f7f4ee] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-[#3a5a40] mb-10 text-center">
            What You’ll Find on This Blog
          </h2>

          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            <motion.div
              variants={fadeUpSoft}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold mb-2">🌱 Sustainable Gear</h3>
              <p className="text-sm text-gray-600">
                Honest reviews of eco-friendly yoga mats, props, and clothing.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpSoft}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold mb-2">🧘 Mindful Movement</h3>
              <p className="text-sm text-gray-600">
                Daily flows for beginners to advanced practitioners.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpSoft}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold mb-2">🧠 Mental Health</h3>
              <p className="text-sm text-gray-600">
                Science-backed breathing, meditation, and stress relief.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpSoft}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold mb-2">🚀 2026 Trends</h3>
              <p className="text-sm text-gray-600">
                Wearables, posture tech, and modern wellness design.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <motion.section
        variants={fadeUpSoft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-serif font-bold text-[#3a5a40] mb-10">
          Trusted by the Community
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.blockquote
            variants={fadeUpSoft}
            className="bg-[#edf3ee] p-6 rounded-xl"
          >
            <p className="text-sm text-gray-700">
              “These short practices changed how I handle stress at work.”
            </p>
            <span className="block mt-3 text-xs font-semibold">
              — Corporate Professional
            </span>
          </motion.blockquote>

          <motion.blockquote
            variants={fadeUpSoft}
            className="bg-[#edf3ee] p-6 rounded-xl"
          >
            <p className="text-sm text-gray-700">
              “Accessible, calming, and deeply human yoga.”
            </p>
            <span className="block mt-3 text-xs font-semibold">
              — Wellness Student
            </span>
          </motion.blockquote>

          <motion.blockquote
            variants={fadeUpSoft}
            className="bg-[#edf3ee] p-6 rounded-xl"
          >
            <p className="text-sm text-gray-700">
              “Finally a yoga blog that understands modern life.”
            </p>
            <span className="block mt-3 text-xs font-semibold">— Reader</span>
          </motion.blockquote>
        </div>
      </motion.section>

      {/* ================= HUMAN SIDE ================= */}
      <motion.section
        variants={fadeUpSoft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#f7f4ee] py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-[#3a5a40] mb-6">
            The Human Behind the Screen
          </h2>

          <p className="text-gray-700 max-w-3xl leading-relaxed">
            When not practicing yoga, I love hiking in nature, experimenting
            with plant-based recipes, and learning how technology can improve
            wellbeing. My personal practice in 2026 is slow, mindful, and
            evolving — because yoga is a lifelong journey.
          </p>
        </div>
      </motion.section>

      {/* ================= FINAL CTA ================= */}
      <motion.section
        variants={fadeUpSoft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 text-center"
      >
        <h2 className="text-3xl font-serif font-bold text-[#3a5a40] mb-4">
          Join the Journey
        </h2>
        <p className="text-gray-600 mb-8">
          Practice with intention. Live with balance. Grow together.
        </p>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center gap-4"
        >
          <a
            href="/blogs"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            Explore Blogs
          </a>
          <a
            href="/contact"
            className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}
