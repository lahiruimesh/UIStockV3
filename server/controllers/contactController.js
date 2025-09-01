const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");

const contactOwner = async (req, res) => {
  try {
    const { ownerId } = req.params;
    const { name, email, message } = req.body;

    const owner = await User.findById(ownerId);
    if (!owner) return res.status(404).json({ message: "Owner not found" });

    await sendEmail(
      owner.email,
      `Message from ${name} via UIStock`,
      `You received a message from ${name} (${email}):\n\n${message}`
    );

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send message" });
  }
};

module.exports = { contactOwner };
