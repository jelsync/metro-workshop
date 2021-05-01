const { Router } = require('express');
const { createClient, getClient, addProduct, getClients, getProducts, deleteProduct, updateClient, deleteClient } = require('../controllers/client');
const router = Router();

router.post('/', createClient);

router.get('/', getClients);

router.get('/:id', getClient);

router.put('/:id', updateClient);

router.put('/:id/products', addProduct);

router.get('/:id/products', getProducts);

router.delete('/:id', deleteClient);

router.put('/:id/products/:idProduct', deleteProduct);

module.exports = router;