const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require("../utils/sendEmail");

// Register
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);

  // Send confirmation email
  await sendEmail(
    email,
    "Welcome to UIStock 🎉",
    `Hi ${username},\n\nThank you for registering at UIStock!\n\nBest,\nUIStock Team`
  );

  const user = await User.create({ username, email, password: hashedPassword });
  res.status(201).json({ id: user._id, email: user.email });
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token, user: { id: user._id, email: user.email } });
};

module.exports = { registerUser, loginUser };
