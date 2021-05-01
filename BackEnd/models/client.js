const { model, Schema } = require('mongoose');

const schema = new Schema({
    uid: String,
    name: String,
    lastName: String,
    email: String,
    password: String,
    buy: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false }
});

module.exports = model('Client', schema);


