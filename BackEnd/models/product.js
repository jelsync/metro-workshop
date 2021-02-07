const { model, Schema } = require('mongoose');

const schema = new Schema({
    nameCategory: String,
    name: String,
    description: String,
    price: Number,
    quantityInStock: Number,
    urlImg: String,
    spent: Boolean,
});

module.exports = model('Product', schema);


