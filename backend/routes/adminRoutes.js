import express from "express";
import auth from "../middleware/auth.js";
import requireRole from "../middleware/requireRole.js";
import Post from "../models/Post.js";
import User from "../models/User.js";
import Contact from "../models/Contact.js";

const router = express.Router();

router.get(
  "/stats",
  auth,
  requireRole("admin", "superAdmin"),
  async (req, res) => {
    try {
      const totalPosts = await Post.countDocuments();
      const totalUsers = await User.countDocuments();
      const admins = await User.countDocuments({ role: "admin" });
      const deleteRequestsCount = await Post.countDocuments({
        "deleteRequest.requested": true,
        "deleteRequest.approved": null,
      });
      // ✅ COUNT ALL CONTACTS (NO FILTER FIRST)
      const contactMessagesCount = await Contact.countDocuments();
      res.json({
        totalPosts,
        totalUsers,
        admins,
        deleteRequestsCount,
        contactMessagesCount,
      });
    } catch (error) {
      console.error("ADMIN STATS ERROR ❌", error);
      res.status(500).json({ message: "Failed to load admin stats" });
    }
  },
);

// ADMIN ROUTES FIRST

router.get(
  "/delete-requests",
  auth,
  requireRole("admin", "superAdmin"),
  async (req, res) => {
    const posts = await Post.find({
      "deleteRequest.requested": true,
      "deleteRequest.approved": null,
    })
      .populate("author", "name email")
      .sort({ "deleteRequest.requestedAt": -1 });

    console.log("ADMIN DELETE REQUESTS:", posts.length);

    res.json(posts);
  },
);

router.put(
  "/posts/:id/approve-delete",
  auth,
  requireRole("admin", "superAdmin"),
  async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    await post.deleteOne();
    res.json({ message: "Post deleted" });
  },
);

router.put(
  "/posts/:id/reject-delete",
  auth,
  requireRole("admin", "superAdmin"),
  async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.deleteRequest = {
      requested: false,
      approved: false,
      reviewedBy: req.user.id,
      reviewedAt: new Date(),
    };

    await post.save();
    res.json({ message: "Delete request rejected" });
  },
);

export default router;
