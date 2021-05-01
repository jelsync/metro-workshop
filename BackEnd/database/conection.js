const mongoose = require('mongoose');

class Database {
    constructor() {
        mongoose.connect('mongodb+srv://metro_db:holaquehace@cluster0.u7hqa.mongodb.net/metro_workshop_db?retryWrites=true&w=majority', {
            useUnifiedTopology: true
        })
            .then(() => {
                console.log('Connect Mongo');
            }).catch((error) => {
                console.log(error);
            });
    }
}

module.exports = new Database();