const { model, Schema } = require('mongoose');

const schema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantityInStock: Number,
    urlImg: String,
    spent: { type: Boolean, default: true },
    category: String,
    amount: Number
});

module.exports = model('Product', schema);