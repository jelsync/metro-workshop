const { model, Schema } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: String,
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = model('User', schema);


