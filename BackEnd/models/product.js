const { model, Schema, mongoose} = require('mongoose');

const schema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantityInStock: Number,
    urlImg: String,
    spent: Boolean,
    category: String,
    amount: Number
});

module.exports = model('Product', schema);