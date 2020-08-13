const express =require('express');
const router = express.Router();
const User= require('../models/user');
const bcrypt = require('bcrypt');
const mongoose= require('mongoose');
const db="mongodb+srv://mongouser:mongopass@oceanmaster-p2lag.mongodb.net/eventsdb";

mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true }, function(err){
  if(err){
      console.error('Error! ' + err)
  } else {
    console.log('Connected to mongodb')      
  }
});
router.post("/register", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user
        .save()
        .then(result => {
          res.status(201).json({
            message: "User created!",
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    });
  });
  



module.exports= router