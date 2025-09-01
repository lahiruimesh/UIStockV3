const User = require("../models/User");
const Product = require("../models/Product");

const getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    const products = await Product.find({ userId: req.user.id });

    res.json({ user, products });
  } catch (err) {
    console.error("Profile error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { getMyProfile };
