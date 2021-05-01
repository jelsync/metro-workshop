const { response } = require('express');
const ProductModel = require('../models/product');
const CategoryModel = require('../models/category');
const ClientModel = require('../models/client');
const mongoose = require('mongoose');


const createProduct = async (req, res = response) => {
    let body = req.body;
    let category = await CategoryModel.findOne({ _id: req.body.categoryId }, {});
    let newProduct = new ProductModel({
        name: body.name,
        description: body.description,
        price: parseInt(body.price),
        quantityInStock: parseInt(body.quantityInStock),
        urlImg: body.urlImg,
        spent: body.spent,
        category: category.name,
        amount: parseInt(body.amount)
    });
    await newProduct.save();
    res.status(200).json({
        ok: true,
        newProduct
    });
}

const getProducts = async (req, res = response) => {
    ProductModel.find().then(products => {
        res.json({ products });
        res.end();
    });
}

const getProductCategory = async (req, res = response) => {
    let category = await CategoryModel.findOne({ _id: req.params.categoryId }, {});
    ProductModel.find({ category: category.name }).then(product => {
        res.send(product);
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
    let product = await ProductModel.findOne({ _id: req.body.id }, {});
    if (product) {
        await ProductModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) },
            {
                quantityInStock: parseInt(body.quantityInStock) + body.amount,
                spent: body.spent = true,
            }).then(product => {
                res.send(product);
                res.end();
            })
    } else {
        await ProductModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) },
            {
                name: body.name,
                description: body.description,
                price: parseInt(body.price),
                quantityInStock: parseInt(body.quantityInStock),
                urlImg: body.urlImg,
            }).then(product => {
                res.send(product);
                res.end();
            })
    }
}

const addCategory = (req, res) => {
    let body = req.body;
    console.log(body);
    ProductModel.updateOne({ id: req.params.id }, {
        $push: {
            category: {
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
    addCategory,
    getProductCategory
}