// import express from "express";
// import Contact from "../models/Contact.js";
// import nodemailer from "nodemailer";
// import { authMiddleware, adminOnly } from "../middleware/auth.js";

// const router = express.Router();

// /* 📩 SEND CONTACT MESSAGE (PUBLIC) */
// router.post("/", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     const contact = await Contact.create({ name, email, message });

//     // ✉️ Auto Email Reply
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.ADMIN_EMAIL,
//         pass: process.env.ADMIN_EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Yoga Blog" <${process.env.ADMIN_EMAIL}>`,
//       to: email,
//       subject: "We received your message 🌿",
//       html: `
//         <p>Hi ${name},</p>
//         <p>Thank you for contacting <b>Yoga Blog</b>.</p>
//         <p>We have received your message and will respond within <b>7 days</b>.</p>
//         <p>🌱 Stay mindful,<br/>Yoga Blog Team</p>
//       `,
//     });

//     res.status(201).json({ message: "Message sent successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to send message" });
//   }
// });

// /* 📊 ADMIN — GET ALL CONTACTS */
// router.get("/", authMiddleware, adminOnly, async (req, res) => {
//   const contacts = await Contact.find().sort({ createdAt: -1 });
//   res.json(contacts);
// });

// export default router;
import express from "express";
import {
  createContact,
  getAllContacts,
} from "../controllers/contactController.js";
// import { protect, superAdminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

/* Public */
router.post("/", createContact);

/* Admin */
router.get("/", getAllContacts);

export default router;
