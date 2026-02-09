import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await api.get("/users");
    setUsers(users => res.data);
  };

  const updateRole = async (id, role) => {
    if (!confirm(`Change role to ${role}?`)) return;
    await api.patch(`/users/${id}/role`, { role });
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td className="p-3 border">{u.name}</td>
              <td className="p-3 border">{u.email}</td>
              <td className="p-3 border font-semibold">{u.role}</td>

              <td className="p-3 border space-x-2">
                {u.role === "reader" && (
                  <button
                    onClick={() => updateRole(u._id, "admin")}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:cursor-pointer"
                  >
                    Promote to Admin
                  </button>
                )}

                {u.role === "admin" && (
                  <button
                    onClick={() => updateRole(u._id, "reader")}
                    className="bg-yellow-600 text-white px-3 py-1 rounded hover:cursor-pointer"
                  >
                    Demote to Reader
                  </button>
                )}

                {u.role === "superAdmin" && (
                  <span className="text-gray-400">SuperAdmin</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
