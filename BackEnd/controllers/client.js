const { response } = require('express');
const ClientModel = require('../models/client');
const mongoose = require('mongoose');


const createClient = async (req, res = response) => {

    const { email } = req.body;
    try {
        let client = await ClientModel.findOne({ email });

        if (client) {
            return res.json({
                ok: true,
                // msg: 'correo existe',
                uid: client.uid,
            })
        }

        client = new ClientModel({
            uid: req.body.uid,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            buy: []
        });

        await client.save().then(client => {
            res.send(client);
            res.end();
        })

    } catch (error) {
        res.json({
            ok: false,
            msg: 'fall',
        })
    }
}

const getClients = (req, res = response) => {

    ClientModel.find().then(clients => {
        res.send(clients);
        res.end();
    })
}

const getClient = (req, res = response) => {

    ClientModel.findOne({ _id: req.params.id }).then(client => {
        res.send(client);
        res.end();
    })
}

const getProducts = (req, res = response) => {

    ClientModel.findOne({ uid: mongoose.Types.ObjectId(req.params.id) }, { buy: true }).then(products => {
        res.send(products);
        res.end();
    })
}

const addProduct = (req, res = response) => {

    ClientModel.updateOne({ uid: mongoose.Types.ObjectId(req.params.id) }, {

        $push: {
            buy: {
                uid: mongoose.Types.ObjectId(),
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

const updateClient = (req, res = response) => {

    let body = req.body;

    ClientModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) },
        {
            name: body.name,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
            buy: body.buy,

        }).then(client => {
            res.send(client);
            res.end();
        })
}

module.exports = {
    createClient,
    getClients,
    getClient,
    addProduct,
    getProducts,
    deleteProduct,
    updateClient
}