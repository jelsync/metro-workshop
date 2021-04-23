const { response } = require('express');
const CategoryModel = require('../models/category');
const ClientModel = require('../models/client');
const ProductModel = require('../models/product');
const mongoose = require('mongoose');
const product = require('../models/product');


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
    ClientModel.findOne({ uid: req.params.id }, { buy: true }).then(products => {
        // ClientModel.findOne({ uid: mongoose.Types.ObjectId(req.params.id) }, { buy: true }).then(products => {
        res.send(products);
        res.end();
    })
}

const addProduct = async (req, res = response) => {
    let body = req.body;
    let category = await CategoryModel.findOne({ _id: req.body.categoryId }, {});
    let product = await ProductModel.findOne({ _id: req.body.productId }, {});
    let client = await ClientModel.findOne({ uid: req.params.id }, { buy: true });

    let { buy } = client;
    // console.log(req.body.quantityInStock);
    if (body.quantityInStock == 0) {
        // if (product.quantityInStock == 0) {
        await ProductModel.updateOne({ _id: req.body.productId }, {
            spent: product.spent = false
        }).then(result => {
            if (result.nModified == 1) {
                return res.send({
                    ok: true,
                    mgs: 'Product Spent'
                });
            }
            return res.send({ ok: false });
        })
    }
    let idBuy = buy.find(el => el._id == req.body.productId);
    console.log(idBuy);
    if (idBuy == undefined) {
        await ProductModel.updateOne({ _id: req.body.productId }, {
            quantityInStock: body.quantityInStock - 1
            // quantityInStock: product.quantityInStock - 1
        });

        await ClientModel.updateOne({ uid: req.params.id }, {
            $push: {
                buy: {
                    _id: body.productId, // _id: mongoose.Types.ObjectId()//
                    name: body.name,
                    category: category.name,
                    category: categoryId,
                    description: body.description,
                    quantityInStock: parseInt(body.quantityInStock),
                    urlImg: body.urlImg,
                    price: parseInt(body.price),
                    amount: parseInt(body.amount)
                }
            }
        }).then(result => {
            if (result.nModified == 1) {
                return res.send({
                    ok: true,
                    uid: ClientModel._id
                });
            }
            return res.send({ ok: false });
        })
    } 
    else {
        let idBuy = buy.find(el => el._id == req.body.productId);
        console.log(idBuy);
        // if (product._id && idBuy._id) {
        let bi = buy.filter(idBuy = (elemento) => {
            if (elemento._id == product._id) {
                let newAmount = elemento.amount += 1;
                let newPrice = elemento.price * newAmount;//No lo actualiza
                return elemento._id;
            }
        });
        await ProductModel.updateOne({ _id: req.body.productId }, {
            quantityInStock: product.quantityInStock - 1
        });
        await ClientModel.updateOne({ uid: req.params.id }, {
            $pull: {
                buy:
                {
                    _id: body.productId
                }
            }
        });
        await ClientModel.updateOne({ uid: req.params.id }, {
            $push: {
                buy: bi
                //  {
                //     _id: body.productId,
                //     name: body.name,
                //     category: category.name,
                //     description: body.description,
                //     urlImg: body.urlImg,
                //     price: parseInt(product.price),
                //     amount: parseInt(product.amount)
                // }
            }
        })
        .then(result => {
            if (result.nModified == 1) {
                return res.send({
                    ok: true,
                    mss: 'Added'
                });
            }
            return res.send({ ok: false });
        })
    }

}

const deleteProduct = (req, res = response) => {
    ClientModel.updateOne({ uid: req.params.id }, {
        // ClientModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, {
        $pull: {
            buy: {
                _id: req.params.idProduct
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