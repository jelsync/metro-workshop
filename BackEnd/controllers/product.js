const { response } = require('express');
const ProductModel = require('../models/product');
const CategoryModel = require('../models/category');
const ClientModel = require('../models/client');
const mongoose = require('mongoose');


const createProduct = async (req, res = response) => {

    let category = await CategoryModel.findOne({ _id: req.body.categoryId }, {});
    let client = await ClientModel.findOne({ _id: req.body.clientId }, {});

    let newProduct = new ProductModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantityInStock: req.body.quantityInStock,
        urlImg: req.body.urlImg,
        spent: req.body.spent,
        category: category.name,
        client: client.name
    });
    await newProduct.save();

    res.send(newProduct);
}

const getProducts = (req, res = response) => {

    ProductModel.find().then(products => {
        res.send(products);
        res.end();
    })
}

const getProduct = (req, res = response) => {

    ProductModel.findOne({ _id: req.params.id }).then(product => {
        res.send(product);
        res.end();
    })
}

const deleteProduct = (req, res = response) => {

    ProductModel.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) }).then(product => {
        if (product.deletedCount == 1)
            res.send({ ok: true });
        res.end();
    })
}

const updateProduct = async (req, res = response) => {

    let body = req.body;
    let category = await CategoryModel.findOne({ _id: req.body.categoryId }, {});
    ProductModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) },
        {
            name: body.name,
            category: category.name,
            description: body.description,
            price: body.price,
            quantityInStock: body.quantityInStock,
            urlImg: body.urlImg,
            spent: body.spent,

        }).then(product => {
            res.send(product);
            res.end();
        })
}

const addCategory = (req, res) => {
    let body = req.body;
    // let id = mongoose.Types.ObjectId(req.params.id)
    console.log(body);
    ProductModel.updateOne({ id: req.params.id }, {
        // ProductModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, {
        // ClientModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, {
        $push: {
            category: {
                // id: mongoose.Types.ObjectId(req.body.id),
                id: body.id,
                name: body.name
            }
        }
    }).then(result => {

        if (result.nModified == 1) {
            return res.json({
                ok: true
            });
        }
        return res.json({
            ok: false,
            id: body.id,
        });
    });
}
module.exports = {
    createProduct,
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    addCategory
}