export default function BlogCard({ image, category, title, author, date }) {
  return (
    <div className="w-64 rounded-xl overflow-hidden bg-white shadow p-4">
      {/* Image wrapper */}
      <div className="relative">
        <img
          src={image}
          alt="Morning Yoga"
          className="w-full h-40 object-cover rounded-xl"
        />

        {/* Lifecycle Tag */}
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
          {category}
        </span>
      </div>

      <h3 className="mt-3 font-semibold text-lg text-[#3a5a40]">{title}</h3>
      <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">{category}</span>
      <p className="text-sm text-gray-500 mt-2">
        {author} · {date}
      </p>
    </div>
  );
}
