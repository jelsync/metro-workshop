const { response } = require('express');
const ClientModel = require('../models/client');
const mongoose = require('mongoose');


const createClient = async (req, res = response) => {

    console.log(req.body);

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
        res.json({
            ok: true,
            clients
        });
        res.end();
    })
}

const getClient = (req, res = response) => {
    ClientModel.findOne({ uid: req.params.id }).then(client => {
        res.json({
            ok: true,
            client
        });
        res.end();
    })
}

const getProducts = (req, res = response) => {//GET COMPRAS
    ClientModel.findOne({ id: req.params.uid }, { buy: true }).then(products => {
        // ClientModel.findOne({ uid: mongoose.Types.ObjectId(req.params.id) }, { buy: true }).then(products => {
        res.send(products);
        res.end();
    })
}

const addProduct = (req, res = response) => {
    // let id = req.body._id;
    let body = req.body;
    // console.log(id);
    ClientModel.updateOne({ id: req.params.uid }, {
        // ClientModel.updateOne({ id: mongoose.Types.ObjectId(req.params.id) }, {
            // ClientModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, {
        $push: {
            buy: {
                id: body._id,
                name: body.name,
                nameCategory: body.nameCategory,
                description: body.description,
                quantityInStock: body.quantityInStock,
                urlImg: body.urlImg,
                spent: body.spent,
                price: body.price
            }
        }
    }).then(result => {

        if (result.nModified == 1) {
            return res.send({ 
                ok: true,
                uid: ClientModel._id });
        }
        return res.send({ ok: false });
    })
}

const deleteProduct = (req, res = response) => {
    let id = req.params.id;
    let id2 = req.params.idProduct;
    console.log(`Usuario ${id}`);
    console.log(`Producto ${id2}`);
    ClientModel.updateOne({ uid: req.params.id }, {
        // ClientModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, {
        $pull: {
            buy: {
                id: req.params.idProduct
            }
        }
    }).then(result => {
        if (result.nModified == 1) {
            res.send({ mensaje: 'Eliminado con exito', ok: true });
            res.end();
        } else {
            res.send({ mensaje: 'Error al eliminar', ok: false });
            res.end();
        }
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

const deleteClient = (req, res = response) => {

    ClientModel.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) }).then(result => {

        if (result.deletedCount == 1) {
            res.send({ ok: true });
            res.end();
        } else {
            res.send({ ok: false });
            res.end();
        }

    })
}

module.exports = {
    createClient,
    getClients,
    getClient,
    addProduct,
    getProducts,
    deleteProduct,
    updateClient,
    deleteClient
}