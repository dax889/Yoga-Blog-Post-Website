import express from "express";
import auth from "../middleware/auth.js";
import requireRole from "../middleware/requireRole.js";
import User from "../models/User.js";

const router = express.Router();

// 👀 Get all users (SuperAdmin only)
router.get(
  "/",
  auth,
  requireRole("superAdmin"),
  async (req, res) => {
    const users = await User.find().select("-password");
    res.json(users);
  }
);

// 🔁 Promote / Demote user
router.patch(
  "/:id/role",
  auth,
  requireRole("superAdmin"),
  async (req, res) => {
    const { role } = req.body;

    if (!["reader", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // prevent self-demotion
    if (req.params.id === req.user.id) {
      return res.status(400).json({ message: "Cannot change your own role" });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select("-password");

    res.json(user);
  }
);

export default router;
