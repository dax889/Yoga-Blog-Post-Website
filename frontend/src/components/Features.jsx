import { href } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../pages/Animations";

const items = [
  {
    title: "Read Blogs",
    desc: "Explore, learn and find calm in our collection of yoga articles.",
    icon: "🌿",
    href: "/",
  },
  {
    title: "Create Post",
    desc: "Share your own yoga journey, tips, and experiences.",
    icon: "📝",
    href: "/add-post",
  },
  {
    title: "Learn & Practice",
    desc: "Get inspired with yoga tips, guides, and routines.",
    icon: "📖",
    href: "/",
  },
];

export default function Features() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white mx-10 rounded-2xl shadow-md grid md:grid-cols-3 gap-8 p-10"
    >
      {items.map((item, i) => (
        <motion.div key={i} variants={fadeUp} className="text-center">
          <a href={item.href} className="text-4xl mb-4 block">
            {item.icon}
          </a>
          <h3 className="text-xl font-semibold text-[#3a5a40]">{item.title}</h3>
          <p className="mt-2 text-gray-600">{item.desc}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
