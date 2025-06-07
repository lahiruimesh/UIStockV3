const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const multer = require("multer");
const { addProduct, getMyProducts, getAllProducts, getProductById } = require('../controllers/productController');

// Define storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure this folder exists or create it
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });



// POST /api/products/add
router.post('/add', verifyToken, upload.single('image'), addProduct);

// Public route: get all products
router.get('/', getAllProducts);

// GET /api/products/my-products
router.get('/my-products', verifyToken, getMyProducts);

// GET /api/products/:id - Get a single product by ID
router.get('/:id', getProductById);

module.exports = router;
