// import express from "express";
// import auth from "../middleware/auth.js";
// import upload from "../middleware/upload.js";
// import {
//   createPost,
//   getPosts,
//   getSinglePost,
//   updatePost,
//   deletePost
// } from "../controllers/postController.js";

// const router = express.Router();

// router.get("/", getPosts);
// router.get("/:id", getSinglePost); // ✅ ADD THIS
// // 👇 VERY IMPORTANT
// router.post("/", auth, upload.single("image"), createPost);
// router.put("/:id", auth, upload.single("image"), updatePost);
// router.delete("/:id", auth, deletePost);

// router.post("/", auth, role("admin", "superAdmin"), createPost);
// router.put("/:id", auth, role("admin", "superAdmin"), updatePost);
// router.delete("/:id", auth, role("admin", "superAdmin"), deletePost);

// export default router;

import express from "express";
import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import requireRole from "../middleware/requireRole.js";
import Post from "../models/Post.js";

import {
  createPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
  toggleLike,
  requestDeletePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.patch("/:id/like", auth, toggleLike);

// ✅ Admin + SuperAdmin ONLY
router.post(
  "/",
  auth,
  requireRole("admin", "superAdmin"),
  upload.single("image"),
  createPost,
);

router.put(
  "/:id",
  auth,
  requireRole("admin", "superAdmin"),
  upload.single("image"),
  updatePost,
);

// router.put("/:id/request-delete", auth, requestDeletePost);

router.put("/:id/request-delete", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  if (post.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  post.deleteRequest = {
    requested: true,
    requestedBy: req.user.id,
    requestedAt: new Date(),
    approved: null,
  };

  await post.save();
  res.json({ message: "Delete request sent" });
});


router.delete("/:id", auth, requireRole("admin", "superAdmin"), deletePost);

export default router;
