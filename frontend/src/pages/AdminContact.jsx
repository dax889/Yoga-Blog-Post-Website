import { useEffect, useState } from "react";
import { getAllContacts } from "../services/api";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacts().then(setContacts);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          📩 Contact Messages
        </h1>
        <p className="text-gray-500 mt-1">
          Messages submitted from the contact form
        </p>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-green-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Message</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Time</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {contacts.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-10 text-gray-500"
                >
                  No contact messages found
                </td>
              </tr>
            ) : (
              contacts.map((c) => (
                <tr
                  key={c._id}
                  className="hover:bg-green-50 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {c.name}
                  </td>

                  <td className="px-6 py-4 text-green-700">
                    {c.email}
                  </td>

                  <td className="px-6 py-4 max-w-md">
                    <p className="line-clamp-2 text-gray-600">
                      {c.message}
                    </p>
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(c.createdAt).toLocaleTimeString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
