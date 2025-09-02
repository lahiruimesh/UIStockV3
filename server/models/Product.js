const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }], // multiple image URLs
  link: { type: String }, // general link (optional)
  file: { type: String }, // general file (optional)
  message: { type: String },

  // 🔹 Extra fields based on category
  stack: { type: String }, // Web Design only
  github: { type: String }, // Web Design only
  figma: { type: String }, // Web Design + UI/UX
  otherLink: { type: String }, // UI/UX + Graphic Design
  sourceFile: { type: String }, // Graphic Design only

  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Product", productSchema);
