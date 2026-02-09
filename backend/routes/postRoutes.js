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
import {
  createPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
  toggleLike
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

router.delete("/:id", auth, requireRole("admin", "superAdmin"), deletePost);

export default router;
