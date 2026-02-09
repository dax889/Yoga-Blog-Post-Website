import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../services/api"

export default function Signup() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "reader",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await registerUser(form)
      navigate("/login")
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f4ee] flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="bg-linear-to-b from-green-800 to-green-700 text-white p-10 flex flex-col justify-center">
          <img src="/Yogaimage1.jpeg" alt="Yoga" className="w-28 mx-auto mb-6" />

          <h2 className="text-4xl font-serif text-center mb-6">
            Begin Your <br /> Yoga Journey
          </h2>

          <ul className="space-y-4 text-sm">
            <li>🧘 Join mindful readers</li>
            <li>✍️ Write wellness blogs</li>
            <li>🌱 Inspire others</li>
            <li>📈 Grow your presence</li>
          </ul>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Create Account
          </h2>

          {error && (
            <p className="bg-red-100 text-red-700 text-sm p-2 rounded mb-4">
              {error}
            </p>
          )}

          <form onSubmit={submit} className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-2"
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2"
              onChange={handleChange}
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-2"
              onChange={handleChange}
              required
            />

            {/* ROLE SELECT */}
            <select
              name="role"
              className="w-full border rounded-lg px-4 py-2"
              onChange={handleChange}
            >
              <option value="reader">Reader (Read Blogs)</option>
              <option value="admin">Writer (Write & Manage Blogs)</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>

            <p className="text-center text-sm">
              Already have an account?
              <a href="/login" className="text-green-700 font-semibold">
                {" "}Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
