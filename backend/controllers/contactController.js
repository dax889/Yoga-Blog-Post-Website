import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  const contact = await Contact.create({
    name,
    email,
    message,
  });

  res.status(201).json({
    message: "Contact message received",
    contact,
  });
};

export const getAllContacts = async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
};
