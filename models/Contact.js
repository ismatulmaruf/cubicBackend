import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    isContacted: { type: Boolean, default: false }, // Admin use for tracking
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
