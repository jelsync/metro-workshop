// const express = require('express');
const {response} = require('express');


const createUser = (req, res = response)=>{
    const {name, email, password} = req.body;

    res.json({
        ok:true,
        msg: 'register',
        name, 
        email, 
        password

    })
}

const loginUser = (req, res = response)=>{

    const {email, name} = req.body;
    // try {
    //     let user = await  user.findOne({email});
    //     if (!user) {
    //         return res.json({
    //             ok:false,
    //             msg: 'User not exist'
    //         });
            
    //     } else {
    //         const passValid = bcrypt.compareSync(password, user.password);
    //         if (!passValid) {
    //             return res.json({
    //                 ok: false,
    //                 msg: 'pass'
    //             })
    //         }
    //     }
    // } catch (error) {
        
    // }

    res.json({
        ok:true,
        msg: 'Login',
        email,
        name
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