const { Router } = require('express');
const { createCategory, getCategories, getCategory, updateCategory } = require('../controllers/category');
const router = Router();

router.post('/', createCategory);

router.get('/', getCategories);

router.get('/:id', getCategory);

router.put('/:id', updateCategory);

module.exports = router;