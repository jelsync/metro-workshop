// const express = require('express');
const {response} = require('express');


const createUser = (req, res = response)=>{
    res.json({
        ok:true,
        msg: 'register'
    })
}

const loginUser = (req, res = response)=>{
    res.json({
        ok:true,
        msg: 'Login'
    })
}

const tokenRenew = (req, res = response)=>{
    res.json({
        ok:true,
        msg: 'Renew'
    })
}

module.exports = {
    createUser,
    loginUser,
    tokenRenew
}