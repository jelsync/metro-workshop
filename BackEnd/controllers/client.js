const { response } = require('express');
const CategoryModel = require('../models/category');
const ClientModel = require('../models/client');
const ProductModel = require('../models/product');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 

const createClient = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        let client = await ClientModel.findOne({ email });

        if (client) {
            return res.json({
                ok: true,
                uid: client.uid,
            })
        }

        
        client = new ClientModel({
            uid: req.body.uid,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            buy: [],
            isAdmin: false,
        });
        const salt = bcrypt.genSaltSync();
        client.password = bcrypt.hashSync(password, salt);

        await client.save().then(client => {
            res.send(client);
            res.end();
        })

    } catch (error) {
        res.json({
            ok: false,
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

const getProducts = (req, res = response) => {
    ClientModel.findOne({ uid: req.params.id }, { buy: true }).then(products => {
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
    let idBuy = buy.find(el => el._id == req.body.productId);
    if (idBuy == undefined) {
        if (product.quantityInStock <= 1) {
            await ProductModel.updateOne({ _id: req.body.productId }, {
                spent: product.spent = false,
                quantityInStock: body.quantityInStock - 1
            })
        }

        await ProductModel.updateOne({ _id: req.body.productId }, {
            quantityInStock: body.quantityInStock - 1
        })

        await ClientModel.updateOne({ uid: req.params.id }, {
            $push: {
                buy: {
                    _id: body.productId,
                    name: body.name,
                    category: body.category,
                    description: body.description,
                    quantityInStock: parseInt(product.quantityInStock - 1),
                    urlImg: body.urlImg,
                    price: parseInt(body.price),
                    amount: parseInt(body.amount),
                    spent: body.spent
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
        });
    }
    else {
        if (product.quantityInStock <= 1) {
            await ProductModel.updateOne({ _id: req.body.productId }, {
                spent: product.spent = false,
                quantityInStock: body.quantityInStock - 1
            })
        } else {
            await ProductModel.updateOne({ _id: req.body.productId }, {
                quantityInStock: body.quantityInStock - 1
            })
        }

        let bi = buy.filter(idBuy = (elemento) => {
            if (elemento._id == product._id) {
                elemento.quantityInStock = elemento.quantityInStock - 1;
                let newAmount = elemento.amount += 1;
                elemento.price = elemento.price + product.price;
                return elemento;
            }
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
        $pull: {
            buy: {
                _id: req.params.idProduct
            }
        }
    }).then(result => {
        if (result.nModified == 1) {
            res.send({ mensaje: 'Successfully killed', ok: true });
            res.end();
        } else {
            res.send({ mensaje: 'Successfully killed', ok: false });
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