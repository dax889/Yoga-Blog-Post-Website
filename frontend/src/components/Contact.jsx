import { useState } from "react";
import { sendContactMessage } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendContactMessage(form);
    alert("Message sent! We'll respond within 7 days 🌿");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif font-bold text-[#3a5a40] mb-6">
        Contact Us
      </h1>

      <p className="text-gray-700 mb-10">
        Have a question or want to collaborate? We'd love to hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-white p-8 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border rounded-lg px-4 py-3"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border rounded-lg px-4 py-3"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border rounded-lg px-4 py-3"
        ></textarea>

        <button className="bg-[#4f6f52] text-white px-6 py-3 rounded-lg w-fit cursor-pointer">
          Send Message
        </button>
      </form>
    </div>
  );
}
// import { useState } from "react";
// import axios from "../api/axios";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("/contact", form);
//     alert("Message sent! We'll respond within 7 days 🌿");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <section className="px-10 py-16 bg-[#f7f4ee]">
//       <h1 className="text-3xl font-serif mb-6 text-green-800 text-center">
//         Contact Us
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-2xl bg-white p-6 rounded-xl shadow"
//       >
//         <input
//           placeholder="Your Name"
//           className="input"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//         />

//         <input
//           placeholder="Your Email"
//           className="input mt-4"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           required
//         />

//         <textarea
//           placeholder="Your Message"
//           className="input mt-4 h-32"
//           value={form.message}
//           onChange={(e) => setForm({ ...form, message: e.target.value })}
//           required
//         />

//         <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded">
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }
