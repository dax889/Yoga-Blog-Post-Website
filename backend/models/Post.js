import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    deleteRequest: {
      requested: { type: Boolean, default: false },
      requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      requestedAt: Date,
      approved: { type: Boolean, default: null },
      reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      reviewedAt: Date,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Post", postSchema);
