import express from "express";
import auth from "../middleware/auth.js";
import requireRole from "../middleware/requireRole.js";
import Post from "../models/Post.js";
import User from "../models/User.js";

const router = express.Router();

router.get(
  "/stats",
  auth,
  requireRole("admin", "superAdmin"),
  async (req, res) => {
    const totalPosts = await Post.countDocuments();
    const totalUsers = await User.countDocuments();
    const admins = await User.countDocuments({ role: "admin" });

    res.json({
      totalPosts,
      totalUsers,
      admins,
    });
  }
);

export default router;
