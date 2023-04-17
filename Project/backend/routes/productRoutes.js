const express = require('express');
const router = express.Router();
const {protect, admin} = require('../middleware/authMiddleware');

const {getProducts, getProductById, addProduct, updateProduct, deleteProduct} = require('../controllers/productController')


router.get('/', getProducts)
router.get('/:id', getProductById)

router.post('/', protect, admin, addProduct)
router.delete('/:id', protect, admin, deleteProduct)
router.put('/:id', protect, admin, updateProduct)

module.exports = router;