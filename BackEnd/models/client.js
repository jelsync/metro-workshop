const { model, Schema } = require('mongoose');

const schema = new Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    buy: { type: Array, default: []},
});

module.exports = model('Client', schema);


