const { Router } = require('express');
const {createUser, getUser, getUsers, deleteUser, updateUser } = require('../controllers/user');
const router = Router();

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id', getUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;