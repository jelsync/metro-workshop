const { model, Schema } = require('mongoose');

const schema = new Schema({
    nombreCategoria: String,
    nombre: String,
    descripcion: String,
    precio: Number,
    cantidadInventario: Number,
    urlImg: String,
    agotado: Boolean,
});

module.exports = model('Producto', schema);


