const Product = require('../models/Product');

// @desc    Add a product for a user
// @route   POST /api/products/add
// @access  Private
const addProduct = async (req, res) => {
  try {
    const { title, category, description, link, file, message } = req.body;
    const image = req.file ? req.file.filename : null;
    

    const newProduct = new Product({
      title,
      category,
      description,
      image,
      link,
      file,
      message,
      userId: req.user.id
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add product" });
  }
};

// @desc    Get all products (public)
// @route   GET /api/products
// @access  Public
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('userId', 'email'); // optional: include user email
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch products" });
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

// @desc    Get a single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('userId', 'email');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch product' });
  }
};


module.exports = {
  addProduct,
  getMyProducts,
  getAllProducts,
  getProductById,
};
