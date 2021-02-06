const { Router } = require('express');
const { createClient, getClient, addProduct, getClients, getProducts, deleteProduct, updateClient } = require('../controllers/client');
const router = Router();

router.post('/', createClient);

router.get('/', getClients);

router.get('/:id', getClient);

router.put('/edit/:id', updateClient);

router.put('/products/:id', addProduct);

router.get('/products/:id', getProducts);

router.put('/products/:id/delete', deleteProduct);


module.exports = router;