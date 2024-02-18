const express = require("express");
const userRoutes = express.Router();
const User = require('../models/userSchema');

userRoutes.post('/singup',(req,res) => {
    const {name,email,password} = req.body;
    if(!email || !name || !password){
        res.status(400).send({message:"Please fill all the details"});
    }
  
    const newUser = new User({
        name,
        email,
        password
    });
    
    newUser.save();
    res.status(200).send({message: newUser});
});

module.exports = userRoutes;