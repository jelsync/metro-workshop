const { model, Schema } = require('mongoose');

const schema = new Schema({
    name: String,
    descripcion: String
});

module.exports = model('Category', schema);

//<Option  value="{ item._id }" >{ item.nombre }</Option>