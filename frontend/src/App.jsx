import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./components/Signup";
// import CreatePost from "./pages/CreatePost";
import Footer from "./components/Footer";
import AddPost from "./components/AddPost";
import About from "./components/New jsx page/About copy";
import MyBlogs from "./pages/My Blogs live";
import Dashboard from "./pages/Dashboard";
import Contact from "./components/Contact";
import ReadMore from "./pages/ReadMore";
import EditPost from "./pages/EditPost";
import AdminRoute from "./components/AdminRoute";
import NotFound from "./pages/Not Found";
import AdminPosts from "./components/AdminPostsControll";
import SuperAdminRoute from "./components/SuperAdminRoute";
import AdminUsers from "./pages/AdminUsers ";

import TopicDetail from "./pages/ReadMore Trending topic";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import AdminDashboard from "./pages/AdminDashboard";
import AdminContacts from "./pages/AdminContact";
import Deleterequest from "./pages/Admindeleterequest";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <SuperAdminRoute>
              {" "}
              <AdminDashboard />
            </SuperAdminRoute>
          }
        >
          {/* <Route path="dashboard" element={<AdminDashboard />} /> */}
          <Route
            path="dashboard"
            element={
              <SuperAdminRoute>
                <Dashboard />
              </SuperAdminRoute>
            }
          />
          <Route
            path="posts"
            element={
              <SuperAdminRoute>
                <AdminPosts />
              </SuperAdminRoute>
            }
          />
          <Route path="users" element={<AdminUsers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="delete-requests" element={<Deleterequest />} />
        </Route>
        {/* Trending Topics Read more */}s
        <Route
          path="/topics/:id"
          element={
            <ProtectedRoute>
              <TopicDetail />
            </ProtectedRoute>
          }
        />
        {/* 🔐 Admin-only */}
        <Route
          path="/add-post"
          element={
            <AdminRoute>
              <AddPost />
            </AdminRoute>
          }
        />
        <Route path="/blogs" element={<MyBlogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/post/:id"
          element={
            <ProtectedRoute>
              <ReadMore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-post"
          element={
            <AdminRoute>
              <AddPost />
            </AdminRoute>
          }
        />
        {/* <Route
          path="/admin/posts"
          element={
            <SuperAdminRoute>
              <AdminPosts />
            </SuperAdminRoute>
          }
        /> */}
        <Route
          path="/admin/users"
          element={
            <SuperAdminRoute>
              <AdminUsers />
            </SuperAdminRoute>
          }
        />
        {/* 🚫 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
