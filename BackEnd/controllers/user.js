const { response } = require('express');
const UserModel = require('../models/user');
const mongoose = require('mongoose');

const createUser = (req, res = response) => {
    let user = new UserModel(req.body);

    user.save().then(user => {
        res.send(user);
        res.end();
    })
}

const loginUser = (req, res = response) => {
    const user = new UserModel(req.body);

    res.json(user)

}

const getUsers = (req, res = response) => {
    UserModel.find().then(users => {
        res.send(users);
        res.end();
    })
}

const getUser = (req, res = response) => {
    UserModel.findOne({ _id: req.params.id }).then(user => {
        res.send(user);
        res.end();
    })
}

const deleteUser = (req, res = response) => {
    UserModel.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) }).then(user => {
        if (user.deletedCount == 1)
            res.send({ ok: true });
        res.end();
    })
}

const updateUser = (req, res = response) => {
    let body = req.body;
    UserModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) },
        {
            name: body.name,
        }).then(user => {
            res.send(user);
            res.end();
        })
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    loginUser
}