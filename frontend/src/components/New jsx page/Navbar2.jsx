import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#3a5a40] font-semibold border-b-2 border-[#3a5a40]"
      : "text-gray-700 hover:text-[#3a5a40]";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-green-100 px-10 py-5 flex items-center justify-between
  transition-transform duration-300 ease-in-out
  ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* ================= Logo ================= */}
      <Link to="/" className="text-2xl font-serif font-bold text-[#3a5a40]">
        🌿 YogaFlow
      </Link>

      {/* ================= Main Navigation ================= */}
      <ul className="hidden md:flex items-center gap-8">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>

        {/* Practice / Flows */}
        <li
          className="relative"
          onMouseEnter={() => setDropdown("practice")}
          onMouseLeave={() => setDropdown(null)}
        >
          <span className="cursor-pointer text-gray-700 hover:text-[#3a5a40]">
            Practice
          </span>

          {dropdown === "practice" && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-xl w-52">
              <Link
                to="/practice/beginner"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Beginner Flows
              </Link>
              <Link
                to="/practice/daily"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                15-Minute Daily
              </Link>
              <Link
                to="/practice/restorative"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Restorative Yoga
              </Link>
            </div>
          )}
        </li>

        {/* Mindfulness */}
        <li
          className="relative"
          onMouseEnter={() => setDropdown("mindfulness")}
          onMouseLeave={() => setDropdown(null)}
        >
          <span className="cursor-pointer text-gray-700 hover:text-[#3a5a40]">
            Mindfulness
          </span>

          {dropdown === "mindfulness" && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-xl w-56">
              <Link
                to="/mindfulness/meditation"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Meditation
              </Link>
              <Link
                to="/mindfulness/pranayama"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Pranayama
              </Link>
              <Link
                to="/mindfulness/mental-health"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Mental Health Yoga
              </Link>
            </div>
          )}
        </li>

        {/* Wellness & Gear */}
        <li
          className="relative"
          onMouseEnter={() => setDropdown("wellness")}
          onMouseLeave={() => setDropdown(null)}
        >
          <span className="cursor-pointer text-gray-700 hover:text-[#3a5a40]">
            Wellness & Gear
          </span>

          {dropdown === "wellness" && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-xl w-64">
              <Link
                to="/wellness/sustainable"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Sustainable Living
              </Link>
              <Link
                to="/wellness/reviews"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Gear Reviews
              </Link>
              <Link
                to="/wellness/tech"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Tech & Wearables
              </Link>
            </div>
          )}
        </li>

        <li>
          <NavLink to="/retreats" className={linkClass}>
            Retreats & Workshops
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* ================= Right Actions ================= */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search articles…"
          className="hidden md:block px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#a3b18a]"
        />

        {/* Auth */}
        {user ? (
          <div className="relative">
            <div className="flex items-center gap-4">
              <Link
                to="/add-post"
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Write
              </Link>

              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="bg-green-700 text-white px-4 py-2 rounded-full"
              >
                👤 {user.email.split("@")[0]}
              </button>
            </div>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  to="/my-blogs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  My Posts
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            Login / Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
}
