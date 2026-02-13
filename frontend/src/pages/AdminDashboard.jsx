import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getAdminStats } from "../services/api";

/* ✅ ADD THIS COMPONENT */
function SidebarItem({ to, icon, label, count }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between px-3 py-2 rounded text-xl
        ${
          isActive
            ? "bg-blue-100 text-blue-900 font-semibold"
            : "hover:bg-blue-50"
        }`
      }
    >
      <span className="flex items-center gap-2">
        {icon} {label}
      </span>

      {/* ✅ SHOW BADGE ALWAYS IF count IS PROVIDED */}
      {count !== undefined && (
        <span
          className={`text-white text-sm px-2 py-0.5 rounded-full
            ${count > 0 ? "bg-red-600" : "bg-gray-400"}
          `}
        >
          {count}
        </span>
      )}
    </NavLink>
  );
}

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    deleteRequestsCount: 0,
    contactMessagesCount: 0,
  });

  useEffect(() => {
    getAdminStats().then((data) => {
      console.log("STATS SET 👉", data);
      setStats(data);
    });
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <aside className="w-72 bg-white shadow-xl p-4">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>

        <nav className="flex flex-col gap-2">
          <SidebarItem to="dashboard" icon="📊" label="Dashboard" />
          <SidebarItem to="posts" icon="📝" label="All Posts access" />
          <SidebarItem to="users" icon="👥" label="User Management" />

          <SidebarItem
            to="contacts"
            icon="📩"
            label="Contact Messages"
            count={stats.contactMessagesCount}
          />

          <SidebarItem
            to="delete-requests"
            icon="🗑️"
            label="Delete Requests"
            count={stats.deleteRequestsCount}
          />

          <button
            onClick={handleLogout}
            className="mt-4 text-left px-3 py-2 rounded hover:bg-red-100 text-red-700 font-semibold text-xl"
          >
            🚪 Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
