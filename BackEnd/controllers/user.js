const { response } = require('express');
const UserModel = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../helpers/jwt');

const createUser = async (req, res = response) => {

    const { email, password } = req.body;
    console.log(req.body);
    try {

        let user = await UserModel.findOne({ email });
        if (user) {
            return res.json({
                ok: false,
                msg: 'User exist'
            });
        }

        user = new UserModel(req.body);
        // console.log(user._id);

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();
        // await user.save().then(user => {
        //     res.send(user);
        //     res.end();
        // });

        const token = await generateToken(user._id, user.name);

        res.json({
            ok: true,
            // user,
            user,
            token
        });

    } catch (error) {
        res.json({
            ok: false,
            msg: 'Error'
        });
    }
}


const loginUser = async (req, res = response) => {
    // const user = new UserModel(req.body);

    const { email, password} = req.body;
    console.log(req.body);

    try {
        const user = await UserModel.findOne({ email });
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

        const token = await generateToken(user._id, user.name);

        res.json({
            ok: true,
            user,
            token
        })

    } catch (error) {
        res.json({
            ok: false
        });
    }
}

const relevalidateToken = async (req, res = response) => {
    const _id = req._id;
    const name = req.name;
    // const { _id, name } = req;
    // console.log(_id);
    // console.log(name);

    const token = await generateToken(_id, name);

    res.json({
        ok: true,
        _id,
        name,
        token
    })
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
    loginUser,
    relevalidateToken
}