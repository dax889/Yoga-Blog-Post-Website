import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    isActive ? "bg-blue-100 text-blue-900 font-semibold text-xl" : "hover:bg-blue-50 text-xl";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white shadow-xl p-4">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>

        <nav className="flex flex-col gap-4 p-2">
          <NavLink to="dashboard" className={linkClass}>
            📊 Dashboard
          </NavLink>

          <NavLink to="posts" className={linkClass}>
            📝 All Posts access
          </NavLink>

          <NavLink to="users" className={linkClass}>
            👥 User Management
          </NavLink>

          {/* <NavLink to="/admin/profile" className={linkClass}>
            👤 Profile
          </NavLink> */}
          <NavLink to="contacts" className={linkClass}>📩 Contact Messages</NavLink>

          <button
            onClick={handleLogout}
            className="mt-4 text-left px-2 py-2 rounded hover:bg-red-100 text-red-700 font-semibold text-xl"
          >
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
