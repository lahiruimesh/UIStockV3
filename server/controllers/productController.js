const Product = require('../models/Product');
const cloudinary = require('../utils/cloudinary');

// @desc    Add a product for a user
// @route   POST /api/products/add
// @access  Private
const addProduct = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      link,
      file,
      message,
      stack,
      github,
      figma,
      otherLink,
      sourceFile
    } = req.body;

    let imageUrls = [];
    // If multiple files uploaded
    if (req.files && req.files.length > 0) {
      // Upload each file to Cloudinary
      const uploadPromises = req.files.map((file) =>
        cloudinary.uploader.upload(file.path, { folder: "products" })
      );
      const results = await Promise.all(uploadPromises);

      imageUrls = results.map((r) => r.secure_url);
    }

    // ✅ Build product data dynamically
    const newProductData = {
      title,
      category,
      description,
      images: imageUrls,
      link,
      file,
      message,
      userId: req.user.id
    };

    // Add fields depending on category
    if (category === "Web Design") {
      if (stack) newProductData.stack = stack;
      if (github) newProductData.github = github;
      if (figma) newProductData.figma = figma;
    } else if (category === "UI/UX Design") {
      if (figma) newProductData.figma = figma;
      if (otherLink) newProductData.otherLink = otherLink;
    } else if (category === "Graphic Design") {
      if (otherLink) newProductData.otherLink = otherLink;
      if (sourceFile) newProductData.sourceFile = sourceFile;
    }

    const newProduct = new Product(newProductData);

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
    const products = await Product.find().populate('userId', 'email');
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

// @desc    Delete a product by ID
// @route   DELETE /api/products/:id
// @access  Private
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if logged-in user owns the product
    if (!req.user || product.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized to delete this product" });
    }

    // Delete images from Cloudinary
    if (product.images && product.images.length > 0) {
      const deletePromises = product.images.map((url) => {
        const parts = url.split('/');
        const filename = parts[parts.length - 1];
        const publicId = `products/${filename.split('.')[0]}`;
        return cloudinary.uploader.destroy(publicId);
      });
      await Promise.all(deletePromises);
    }

    await product.deleteOne();

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Failed to delete product" });
  }
};

// @desc    Search products
// @route   GET /api/products/search
// @access  Public
const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ message: "Query is required" });

    const products = await Product.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
        { stack: { $in: [new RegExp(query, 'i')] } }
      ]
    }).populate('userId', 'email');

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to search products" });
  }
};


module.exports = {
  addProduct,
  getMyProducts,
  getAllProducts,
  getProductById,
  deleteProduct,
  searchProducts
};
