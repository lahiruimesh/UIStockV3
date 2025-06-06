const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { addProduct, getMyProducts } = require('../controllers/productController');

// POST /api/products/add
router.post('/add', verifyToken, addProduct);

// GET /api/products/my-products
router.get('/my-products', verifyToken, getMyProducts);

module.exports = router;
