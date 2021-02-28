const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateToken = (req, res = response, next) => {

    const token = req.header('x-token');
    // console.log(token);

    if (!token) {
        return res.json({
            ok: false,
            msg: 'Token not exist'
        });
    }

    try {
        // const payload = jwt.verify(
            // token,
            // process.env.SECRET_JWT_SEED
        // );
        const { _id, name } = jwt.verify(
        // const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        // console.log(payload);
        req._id = _id;
        req.name = name;
    } catch (error) {
        return res.json({
            ok: false,
            msg: 'Token not validate'
        });
    }

    next();
}

module.exports = {
    validateToken
}