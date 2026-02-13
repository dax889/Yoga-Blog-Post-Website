import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content required" });
    }

    const post = await Post.create({
      title,
      content,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      author: req.user.id, // _ add for _id
    });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Post creation failed" });
  }
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "_id email");
  res.json(posts);
};

export const getSinglePost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate(
    "author",
    "_id email",
  );
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
};

export const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const isAuthor = post.author.toString() === req.user.id;
  const isAdmin =
    req.user.role === "admin" || req.user.role === "superAdmin";

  if (!isAuthor && !isAdmin) {
    return res.status(403).json({ message: "Not authorized" });
  }

  await post.deleteOne();
  res.json({ message: "Post deleted" });
};


export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const isAuthor = post.author.toString() === req.user.id;
    const isAdmin =
      req.user.role === "admin" || req.user.role === "superAdmin";

    if (!isAuthor && !isAdmin) {
      return res.status(403).json({ message: "Not authorized" });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    if (req.file) {
      post.image = `/uploads/${req.file.filename}`;
    }

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

export const toggleLike = async (req, res) => {
  const post = await Post.findById(req.params.id);
  const userId = req.user.id;

  if (!post) return res.status(404).json({ message: "Post not found" });

  const alreadyLiked = post.likedBy.includes(userId);

  if (alreadyLiked) {
    post.likes -= 1;
    post.likedBy.pull(userId);
  } else {
    post.likes += 1;
    post.likedBy.push(userId);
  }

  await post.save();
  res.json({ likes: post.likes });
};

// PostController.js
export const requestDeletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // 🔒 Only post owner
    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    // 🔁 TOGGLE LOGIC
    if (post.deleteRequest?.status === "pending") {
      post.deleteRequest.status = "cancelled";
      post.deleteRequest.requestedAt = null;
    } else {
      post.deleteRequest = {
        status: "pending",
        requestedBy: req.user.id,
        requestedAt: new Date(),
      };
    }

    await post.save();
    res.json(post.deleteRequest);
  } catch (err) {
    console.error("Delete request error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

