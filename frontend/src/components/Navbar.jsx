import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#3a5a40] font-semibold border-b-2 border-[#3a5a40]"
      : "text-gray-700 hover:text-[#3a5a40]";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-green-100 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold text-[#3a5a40]"
        >
          🌿 Yoga Blog
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/blogs" className={linkClass}>
            Blogs
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4 relative">
          {user && user.role === "superAdmin" && (
            <Link
              to="/admin/users"
              className="px-4 py-2 bg-amber-500 text-white rounded"
            >
              User Management
            </Link>
          )}

          {user && user.role !== "reader" && (
            <NavLink
              to="/add-post"
              className="bg-green-700 text-white px-4 py-2 rounded"
            >
              Add Post
            </NavLink>
          )}

          {user ? (
            <>
              <button
                ref={buttonRef}
                onClick={() => setOpen(!open)}
                className="bg-green-700 text-white px-4 py-2 rounded-full hover:cursor-pointer"
              >
                👤 {user.email.split("@")[0]}
              </button>

              {open && (
                <div
                  className="absolute right-0 top-14 w-48 bg-white shadow rounded-xl"
                  ref={dropdownRef}
                >
                  {user.role === "superAdmin" && (
                    <>
                      <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/admin/posts"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        All Posts access
                      </Link>
                      <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Admin Dashboard
                      </Link>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="bg-green-700 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg p-4 space-y-3">
          <NavLink
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded hover:bg-green-100"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded hover:bg-green-100"
          >
            About
          </NavLink>

          <NavLink
            to="/blogs"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded hover:bg-green-100"
          >
            Blogs
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded hover:bg-green-100"
          >
            Contact
          </NavLink>

          {/* Admin / Author */}
          {user && user.role !== "reader" && (
            <NavLink
              to="/add-post"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 rounded hover:bg-green-100 "
            >
              ➕ Add Post
            </NavLink>
          )}

          {/* Super Admin */}
          {user && user.role === "superAdmin" && (
            <>
              <NavLink
                to="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 rounded hover:bg-green-100"
              >
                📊 Dashboard
              </NavLink>

              <NavLink
                to="/admin/users"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 rounded hover:bg-green-100"
              >
                👥 User Management
              </NavLink>
            </>
          )}

          {/* Auth */}
          {user ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 rounded text-red-600 hover:bg-red-100"
            >
              🚪 Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 rounded bg-green-700 text-white"
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
}
