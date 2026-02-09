// export default function Contact() {
//   return (
//     <div className="max-w-5xl mx-auto px-6 py-16">
//       <h1 className="text-4xl font-serif font-bold text-[#3a5a40] mb-6">
//         Contact Us
//       </h1>

//       <p className="text-gray-700 mb-10">
//         Have a question or want to collaborate? We'd love to hear from you.
//       </p>

//       <form className="grid gap-6 bg-white p-8 rounded-xl shadow">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="border rounded-lg px-4 py-3"
//         />

//         <input
//           type="email"
//           placeholder="Your Email"
//           className="border rounded-lg px-4 py-3"
//         />

//         <textarea
//           placeholder="Your Message"
//           rows="5"
//           className="border rounded-lg px-4 py-3"
//         ></textarea>

//         <button className="bg-[#4f6f52] text-white px-6 py-3 rounded-lg w-fit cursor-pointer">
//           Send Message
//         </button>
//       </form>
//     </div>
//   )
// }
import { Instagram, Facebook, Twitter } from "lucide-react"
export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

      {/* ===============================
        Section 1: Hero Header
      =============================== */}
      <section className="text-center space-y-6">
        <img
          src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3"
          alt="Yoga Studio"
          className="w-full h-80 object-cover rounded-3xl shadow"
        />

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#3a5a40]">
          Let’s breathe together
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto">
          Whether you have a question about a pose, want to collaborate,
          or are curious about our retreats — I’m here to listen.
        </p>
      </section>

      {/* ===============================
        Section 2: Smart Contact Form
      =============================== */}
      <section className="grid md:grid-cols-2 gap-12 items-start">

        {/* Form */}
        <form className="grid gap-6 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-serif text-[#3a5a40]">
            Send a message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]"
          />

          <select
            className="border rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]"
          >
            <option>General Question</option>
            <option>Private Session Inquiry</option>
            <option>Brand Collaboration / Sponsorship</option>
            <option>Retreat Booking</option>
          </select>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]"
          />

          <p className="text-sm text-gray-500">
            Namaste 🙏 I typically respond within <strong>24–48 hours</strong>.
          </p>

          <button className="bg-[#4f6f52] hover:bg-[#3a5a40] text-white px-6 py-3 rounded-lg w-fit transition">
            Send Message
          </button>
        </form>

        {/* ===============================
          Section 3: Direct Contact & Social
        =============================== */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-[#3a5a40] mb-2">
              Direct Contact
            </h3>
            <p className="text-gray-700">📧 hello@yogaflow.com</p>
            <p className="text-gray-700">📞 +91 98765 43210</p>
            <p className="text-gray-700">📍 Mehsana, India</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#3a5a40] mb-2">
              Stay Connected
            </h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-green-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-green-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
        Section 4: Location & Map
      =============================== */}
      <section className="space-y-6">
        <h2 className="text-3xl font-serif text-[#3a5a40]">
          Visit the Studio
        </h2>

        <div className="rounded-2xl overflow-hidden shadow">
          <iframe
            title="Studio Location"
            src="https://www.google.com/maps?q=Rishikesh&output=embed"
            className="w-full h-80 border-0"
            loading="lazy"
          ></iframe>
        </div>

        <p className="text-gray-600">
          🚌 Nearest bus stop: Rishikesh Bus Stand •  
          🚗 Free parking available nearby
        </p>
      </section>

      {/* ===============================
        Section 5: AI Chat (Placeholder)
      =============================== */}
      <section className="bg-[#f1f5f2] p-10 rounded-2xl text-center space-y-4">
        <h2 className="text-2xl font-serif text-[#3a5a40]">
          Quick Answers
        </h2>
        <p className="text-gray-700">
          Have a quick question like “What should I wear?” or
          “Do you offer prenatal yoga?”
        </p>
        <a href="https://gemini.google.com" className="bg-white border px-6 py-3 rounded-lg shadow hover:bg-gray-50">
          Chat with AI Guide 🤍
        </a>
      </section>

      {/* ===============================
        Section 6: FAQ Links
      =============================== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif text-[#3a5a40]">
          Helpful Links
        </h2>
        <ul className="flex flex-wrap gap-6 text-gray-600">
          <li className="hover:text-[#3a5a40] cursor-pointer">Class Pricing</li>
          <li className="hover:text-[#3a5a40] cursor-pointer">Beginner Tips</li>
          <li className="hover:text-[#3a5a40] cursor-pointer">Cancellation Policy</li>
        </ul>
      </section>

      {/* ===============================
        Section 7: Newsletter
      =============================== */}
      <section className="bg-[#3a5a40] text-white p-12 rounded-3xl text-center space-y-6">
        <h2 className="text-3xl font-serif">
          Stay in the Flow
        </h2>
        <p className="text-gray-200">
          Receive 2026 wellness guides, retreats & mindful blog updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg text-white"
          />
          <button className="bg-white text-[#3a5a40] px-6 py-3 rounded-lg font-semibold">
            Join Newsletter
          </button>
        </div>
      </section>

    </div>
  )
}
