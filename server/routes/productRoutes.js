const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

// ✅ Import cloudinary storage
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../utils/cloudinary');

// ✅ Set up Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'products', // Cloudinary folder
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});

const upload = multer({ storage: storage });

// ✅ Import controllers
const {
  addProduct,
  getMyProducts,
  getAllProducts,
  getProductById,
  deleteProduct,
} = require('../controllers/productController');

// ✅ Add product (image goes to Cloudinary)
router.post('/add', verifyToken, upload.array('images', 4), addProduct);

// ✅ Get all products (public)
router.get('/', getAllProducts);

// ✅ Get my products (protected)
router.get('/my-products', verifyToken, getMyProducts);

// ✅ Get product by ID (public)
router.get('/:id', getProductById);

// Delete product
router.delete('/:id', verifyToken, deleteProduct);

module.exports = router;
