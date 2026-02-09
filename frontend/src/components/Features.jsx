import { href } from "react-router-dom";

const items = [
  {
    title: "Read Blogs",
    desc: "Explore, learn and find calm in our collection of yoga articles.",
    icon: "🌿",
    href: "/"
  },
  {
    title: "Create Post",
    desc: "Share your own yoga journey, tips, and experiences.",
    icon: "📝",
    href: "/add-post"
  },
  {
    title: "Learn & Practice",
    desc: "Get inspired with yoga tips, guides, and routines.",
    icon: "📖",
    href: "/"
  },
];

export default function Features() {
  return (
    <section className="bg-white mx-10 rounded-2xl shadow-md grid md:grid-cols-3 gap-8 p-10">
      {items.map((item, i) => (
        <div key={i} className="text-center">
          <a href={item.href} className="text-4xl mb-4">{item.icon}</a>
          <h3 className="text-xl font-semibold text-[#3a5a40]">
            {item.title}
          </h3>
          <p className="mt-2 text-gray-600">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
