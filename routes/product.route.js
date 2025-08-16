const express = require('express');
const Product = require('../models/products.model'); // Import the Product model
const router = express.Router();
const {getProducts,getProductById,createProduct,updateProduct, deleteProduct} = require('../controllers/product.controller');
const productController = require('../controllers/product.controller');


// router.get('/',getProducts);
// router.get('/api/product/:id',getProductById)
// router.post('/', createProduct)
// router.put('/api/product/:id', updateProduct);
// router.delete('/api/product/:id', deleteProduct);


router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


module.exports = router; 