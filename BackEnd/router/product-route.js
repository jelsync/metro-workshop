const { Router } = require('express');
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct, addCategory, getProductCategory } = require('../controllers/product');
const router = Router();

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/:id', getProduct);

router.get('/category/:categoryId', getProductCategory);

router.put('/:id', updateProduct);

router.put('/category/:id', addCategory);

router.delete('/:id', deleteProduct);

module.exports = router;