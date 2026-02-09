export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-10 py-16 items-center">
      <div>
        <h1 className="text-5xl font-serif text-[#3a5a40] leading-tight">
          Find Your Inner Peace
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Inspiration, Tips & Wellness Through Yoga
        </p>

        <a
          href="/blogs"
          className="mt-10 bg-[#4f6f52] text-white px-6 py-3 rounded-xl hover:cursor-pointer hover:bg-green-600"
        >
          <button className="mt-10 px-6 py-3">Explore Blogs</button>
        </a>
      </div>

      <div className="flex justify-center ">
        <img
          src="Yogaimage2.jpeg"
          alt="Yoga Meditation"
          className="rounded-3xl object-cover h-80 "
        />
      </div>
    </section>
  );
}
