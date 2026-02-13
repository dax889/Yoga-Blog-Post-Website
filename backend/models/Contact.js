import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "replied"],
      default: "pending",
    },
       // 🔴 THIS FIELD MUST EXIST
    read: {
      type: Boolean,
      default: false,
    },
    
  },
  
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);