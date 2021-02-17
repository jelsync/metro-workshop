const { response } = require('express');
const UserModel = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const createUser = async (req, res = response) => {

    const { email, password } = req.body;
    try {
        let user = await UserModel.findOne({ email });
        if (user) {
            return res.json({
                ok: false,
                msg: 'User exist'
            });
        }

        user = new UserModel(req.body);

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save().then(user => {
            res.send(user);
            res.end();
        })

    } catch (error) {
        res.json({
            ok: false
        });
    }
}


const loginUser = async (req, res = response) => {
    // const user = new UserModel(req.body);

    const {email, password} = req.body;

    try {
        const  user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({
                ok: false,
                msg: 'Email not exist'
            });
        }

        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) {
            return res.json({
                ok: false,
                msg: 'Password not correct'
            });
        }
        
        res.json(user);

    } catch (error) {
        res.json({
            ok: false
        });
    }


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