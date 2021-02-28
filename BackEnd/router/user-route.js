const { Router } = require('express');
const { createUser, getUser, getUsers, deleteUser, updateUser, loginUser, relevalidateToken } = require('../controllers/user');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateToken } = require('../middlewares/validate-token');
const router = Router();

// router.use(validateToken);

router.post('/userNew',
    [
        // check('name', 'Es obligatorio').not().isEmpty(),
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

router.get('/renew', validateToken, relevalidateToken);

router.get('/', getUsers);

router.get('/:id', getUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;