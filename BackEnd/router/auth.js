//Router User/Auth
// host + /api/auth

const {Router} = require('express');
const { createUser, loginUser, tokenRenew  } = require('../controllers/auth');
const router = Router();

router.post('/new', createUser);

router.post('/', loginUser);

router.get('/renew', tokenRenew);

module.exports = router;