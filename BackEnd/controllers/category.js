const { response } = require('express');
const CategoryModel = require('../models/category');

const createCategory = (req, res = response) => {
    let category = new CategoryModel(req.body);
    category.save().then(cat => {
        res.send(cat);
        res.end();
    })
}

const getCategories = (req, res = response) => {
    CategoryModel.find().then(cat => {
        res.send(cat);
        res.end();
    })
}

const getCategory = (req, res = response) => {
    CategoryModel.findOne({ _id: req.params.id }).then(cat => {
        res.send(cat);
        res.end();
    })
}

const updateCategory = (req, res = response) => {
    let body = req.body;
    CategoryModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) },
        {
            name: body.name,
        }).then(cat => {
            res.send(cat);
            res.end();
        })
}

module.exports = {
    createCategory,
    getCategory,
    getCategories,
    updateCategory
}