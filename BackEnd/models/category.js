const { model, Schema } = require('mongoose');

const schema = new Schema({
    name: String,
    descripcion: String
    // product: { type: Schema.Types.ObjectId, ref: 'Product' }
    // product: { type: Schema.Types.ObjectId, ref: 'Product' }
});

module.exports = model('Category', schema);

//<Option  value="{ item._id }" >{ item.nombre }</Option>