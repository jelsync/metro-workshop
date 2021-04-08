const { Router } = require('express');
const { createClient, getClient, addProduct, getClients, getProducts, deleteProduct, updateClient, deleteClient } = require('../controllers/client');
const router = Router();

router.post('/', createClient); // api/client/

router.get('/', getClients); // api/client/

router.get('/:id', getClient); // api/client/idusario

router.put('/:id', updateClient); // api/client/idusario

router.put('/:id/products', addProduct); // api/client/iudusario/products

router.get('/:id/products', getProducts); // api/client/idUsuario/products/

router.delete('/:id', deleteClient); // api/client/idUsuario/

router.put('/:id/products/:idProduct', deleteProduct); // api/client/idUsuario/products/:idProducto


module.exports = router;