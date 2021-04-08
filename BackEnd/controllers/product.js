const { response } = require('express');
const ProductModel = require('../models/product');
const mongoose = require('mongoose');


const createProduct = (req, res = response) => {

    let product = new ProductModel(req.body);
    console.log(product);
    product.save().then(product => {
        res.send(product);
        res.end();
    })

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

        if( product.deletedCount == 1 )
            res.send({ok: true});
            res.end();
    })
}

const updateProduct = (req, res = response) => {

    let body = req.body;

    ProductModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) },
        {
            name: body.name,
            nameCategory: body.nameCategory,
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

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct
}