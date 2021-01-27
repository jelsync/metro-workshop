const { model, Schema } = require('mongoose');

const schema = new Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
});

module.exports = model('User', schema);


