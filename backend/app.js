import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/ContactRoutes.js";

const app = express();

// ✅ REQUIRED FOR ES MODULE
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ CORS (MUST BE BEFORE ROUTES)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// ✅ BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ STATIC FILES (IMAGES)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);


app.use("/api/contact", contactRoutes);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", userRoutes);

app.use("/api/admin", adminRoutes);

export default app;
