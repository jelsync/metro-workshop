const jwt = require('jsonwebtoken');

const generateToken = (_id, name) => {

    return new Promise((resolve, reject) => {

        const payload = { _id, name };
        console.log(payload);

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '3h'
        }, (err, token) => {
            if (err) {
                reject('Generate not token');
            }
            resolve(token);
        })
    })
}

module.exports = {
    generateToken
}