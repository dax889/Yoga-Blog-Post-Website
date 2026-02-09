import { useEffect, useState } from "react";
import { getAllContacts } from "../services/api";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacts().then(setContacts);
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📩 Contact Messages</h1>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id} className="border-t">
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td className="max-w-xs truncate">{c.message}</td>
              <td>{new Date(c.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
