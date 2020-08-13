const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Attendance = require('../models/attendance');
const User = require('../models/user');
//const jwt = require('jsonwebtoken');
const checkAuth= require('../middleware/check-auth');
const multer = require('multer');
//const bcrypt = require('bcrypt');
//const GridFsStorage = require('multer-gridfs-storage');
//const Grid = require('gridfs-stream');
//const methodOverride = require('method-override');
const path = require('path');
//const crypto = require('crypto');
//const db = "mongodb://testuser:testpw@ds123136.mlab.com:23136/eventsdb";
//const db= "mongodb+srv://schooladmin:schooladmin@cluster0.p2lag.mongodb.net/eventsdb";
const db= "mongodb://216.10.242.121:27017";

const conn = mongoose.createConnection(db);
mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});


router.get("/getStudentbyClass",(req, res, next)=>{
  User.find()
  .then(student => {
    if (!student) {
      return res.status(401).json({
        message: "Attnendance not Available"
      });
    }
    return res.status(200).json({
      students: student
    })
  })
  .catch(err => {
    return res.status(401).json({
      message: "Something wrong"
    });
  });
});

router.post("/addAttendance", (req, res, next) => {
    
    console.log("Attendence Request Body:",req.body)
      const date =new Date(req.body.date);
      const attend = new Attendance({
        class: req.body.class,
        date: date,
        status: req.body.status
      });
      attend.save()
        .then(result => { 
          res.status(201).json({
            message: "Attendence Updated!",
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            error: "Something Went Wrong !!"
          });
        });
  });

  router.get("/getAttendance", (req, res, next) => { 
    let fetchedUser;
    console.log(req.body);
    const date= new Date(req.body.date)
    Attendance.findOne({ class: req.body.class, date: date })
      .then(attend => {
        if (!attend) {
          return res.status(401).json({
            message: "Attnendance not Available"
          });
        } 
        return res.status(200).json({
          attendance: attend
        })
      })
      .catch(err => {
        return res.status(401).json({
          message: "Something wrong"
        });
      });
  });
  
module.exports = router;