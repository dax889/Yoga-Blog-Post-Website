import axios from "../api/axios";
import api from "../api/axios";

const API_BASE = "http://localhost:8000/api";

// 📝 REGISTER / SIGNUP
export const registerUser = async (form) => {
  const res = await fetch(`http://localhost:8000/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Signup failed");

  return data;
};

const getToken = () => localStorage.getItem("token");

export const apiFetch = async (url, options = {}) => {
  const token = getToken();

  const res = await fetch(`${API_BASE}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
};

// ✅ ADD THIS (MOST IMPORTANT)
// export const loginUser = (data) =>
//   apiFetch("/auth/login/", {
//     method: "POST",
//     body: JSON.stringify(data),
//   });

// POSTS
export const getPosts = async () => {
  const res = await fetch(`${API_BASE}/posts`);
  return res.json();
};

export const createPost = async (form) => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:8000/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(form),
  });

  if (!res.ok) {
    throw new Error("Not authorized");
  }

  return res.json();
};

export const loginUser = async (form) => {
  const res = await fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  // ❌ backend error (401, 400, 500)
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Login failed");
  }

  return res.json();
};
export const fetchMyPosts = async () => {
  const res = await fetch(`${API_BASE}/posts/my`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return res.json();
};

export const getPostById = async (id) => {
  const res = await fetch(`http://localhost:8000/api/posts/${id}`);
  if (!res.ok) throw new Error("Post not found");
  return res.json();
};

export const sendContactMessage = async (data) => {
  try {
    const res = await axios.post("/contact", data);
    return res.data;
  } catch (err) {
    throw err.response?.data?.message || "Failed to send message";
  }
};

/**
 * Admin: Get all contact messages
 * Token auto-attached via axios interceptor
 */
export const getAllContacts = async () => {
  const res = await axios.get("/contact");
  return res.data;
};
// Authenticated
// Authenticated
export const requestDeletePost = async (postId) => {
  const res = await axios.put(`/posts/${postId}/request-delete`, {});
  return res.data;
};
export const getAdminStats = async () => {
  const res = await api.get("/admin/stats");
  console.log("ADMIN STATS 👉", res.data); // 👈 MUST SEE THIS
  return res.data;
};
