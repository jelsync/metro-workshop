const { response } = require('express');
const ClientModel = require('../models/client');
const mongoose = require('mongoose');


const createClient = (req, res = response) => {

    let client = new ClientModel({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        buy: []
    });

    client.save().then(client => {
        res.send(client);
        res.end();
    })

}

const getClients = (req, res = response) => {

    ClientModel.find().then(clients => {
        res.send(clients);
        res.end();
    })
}

const getProducts = (req, res = response) => {

    ClientModel.findOne({ _id: mongoose.Types.ObjectId(req.params.id) }, { buy: true }).then(products => {
        res.send(products);
        res.end();
    })
}

const addProduct = (req, res = response) => {

    ClientModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, {

        $push: {
            buy: {
                _id: mongoose.Types.ObjectId(),
                name: req.body.name,
                price: req.body.price
            }
        }
    }).then(result => {

        if (result.nModified == 1) {
            return res.send({ ok: true });
        }

        return res.send({ ok: false });

    })
}

const deleteProduct = (req, res = response) => {

    ClientModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, {

        $pull: {
            buy: {
                _id: mongoose.Types.ObjectId(req.body.idProducto)
            }
        }
    }).then(result => {
        res.send(result);
        res.end();
    })
}


module.exports = {
    createClient,
    getClients,
    addProduct,
    getProducts,
    deleteProduct,
}