const Product = require('../models/Product');

// @desc    Add a product for a user
// @route   POST /api/products/add
// @access  Private
const addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      userId: req.user.id
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add product" });
  }
};

// @desc    Get products for logged-in user
// @route   GET /api/products/my-products
// @access  Private
const getMyProducts = async (req, res) => {
  try {
    const products = await Product.find({ userId: req.user.id });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

module.exports = {
  addProduct,
  getMyProducts,
};
