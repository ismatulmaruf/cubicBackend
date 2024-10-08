import express from "express";
const router = express.Router();
import Contact from "../models/Contact.js";

// Route to submit contact form
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const contactMessage = new Contact({
      name,
      email,
      message,
    });

    const savedMessage = await contactMessage.save();
    res
      .status(201)
      .json({ message: "Message sent successfully", data: savedMessage });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Route for admin to get all contact messages
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find(); // Get all messages
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch messages", error });
  }
});

// Route to mark a message as contacted
router.put("/:id/contacted", async (req, res) => {
  try {
    const messageId = req.params.id;
    const updatedMessage = await Contact.findByIdAndUpdate(
      messageId,
      { isContacted: true },
      { new: true }
    );
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(500).json({ message: "Failed to update message status", error });
  }
});

export default router;
