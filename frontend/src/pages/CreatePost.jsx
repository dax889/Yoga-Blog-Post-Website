import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/api";

export default function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", excerpt: "", content: "" });

  const submit = async (e) => {
    e.preventDefault();
    await createPost(form);
    // ✅ Clear form
    setForm({
      title: "",
      excerpt: "",
      content: "",
    });
    navigate("/");
  };

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Create Yoga Post</h1>
      <input
        className="w-full border p-2 mb-3"
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        className="w-full border p-2 mb-3"
        placeholder="Short Excerpt"
        onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
      />
      <textarea
        className="w-full border p-2 mb-3"
        rows="6"
        placeholder="Content"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      ></textarea>
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Publish
      </button>
    </form>
  );
}
