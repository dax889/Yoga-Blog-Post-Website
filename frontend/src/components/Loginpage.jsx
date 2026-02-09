// import yoga from "Yogaimage1.jpeg"

export default function Login() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        {/* LEFT */}
        <div className="bg-linear-to-b from-green-800 to-green-700 text-white p-10 flex flex-col justify-center">
          <img src="Yogaimage1.jpeg" className="w-28 mx-auto mb-6" />

          <h2 className="text-4xl font-serif text-center mb-6">
            Welcome Back <br /> to Your Practice
          </h2>

          <ul className="space-y-4 text-sm">
            <li>📖 Discover daily yoga blogs</li>
            <li>🧘 Learn poses, meditation & wellness</li>
            <li>💬 Share your yoga journey</li>
            <li>🧠 Calm mind, healthy body</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

          <form className="space-y-4">
              
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-2"
            />

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-700" />
                Remember Me
              </label>
              <a href="#" className="text-green-700">
                Forgot Password?
              </a>
            </div>

            <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
              Login
            </button>

            <p className="text-center text-sm">
              Don’t have an account?
              <a href="/signup" className="text-green-700 font-semibold cursor-pointer">
                {" "}
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
