const { Router } = require('express');
const { createUser, getUser, getUsers, deleteUser, updateUser, loginUser } = require('../controllers/user');
const router = Router();
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

router.post('/userNew',
    [
        check('name', 'Es obligatorio').not().isEmpty(),
        check('email', 'Es obligatorio').isEmail(),
        check('password', 'Es obligatorio').isLength({ min: 6 }),
        validateFields
    ],
    createUser);

router.post('/login',
    [
        check('email', 'Es obligatorio').isEmail(),
        check('password', 'Es obligatorio').isLength({ min: 6 }),
        validateFields
    ],
    loginUser);

router.get('/', getUsers);

router.get('/:id', getUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;