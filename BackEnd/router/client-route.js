const { Router } = require('express');
const { createClient, addProduct, getClients, getProducts, deleteProduct } = require('../controllers/client');
const router = Router();

router.post('/', createClient);

router.get('/', getClients);

router.put('/products/:id', addProduct);

router.get('/products/:id', getProducts);

router.put('/products/:id/delete', deleteProduct);


module.exports = router;