const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const User = require('../models/user');
const jwt = require('jsonwebtoken');
const checkAuth= require('../middleware/check-auth');
const multer = require('multer');
const bcrypt = require('bcrypt');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
//const methodOverride = require('method-override');
const path = require('path');
const crypto = require('crypto');
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






let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('videos');
});

// Create storage engine
const storage = new GridFsStorage({
  url: db,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        //const sub= 
          console.log(" REQEUst body:::: ",req.body)
        // console.log( 'subject:',req/.body);
        //const metadata = req.userData;
        const metadata=[{
          subject:req.body.subject,
          originalname: file.originalname,
          dueDate:req.body.dueDate,
          class: req.body.class
        }]
        console.log(metadata);
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          metadata: metadata,
          filename: filename,
          bucketName: 'videos'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });


router.post('/v_upload',upload.single('video-file'),(req, res)=>{
    console.log("Request Body:",req.body)
   // console.log(req.userData);
   //console.log(req);
    res.status(200).json({'hi':'there from Assignment'});
    
  })



  
  
  router.get('/files',(req, res) => {
    let filesData = [{
      originalname:'',
      filename:'',
      contentType:'',
      metadata:''
    }
    ];
    let count = 0;
    gfs.collection('videos'); // set the collection to look up into
    console.log("Request Query:",req.query);
    gfs.files.find({"metadata.subject": req.query.subject, "metadata.class": req.query.class}).toArray((err, files) => {
        // Error checking
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // Loop through all the files and fetch the necessary information
        //originalname: file.metadata.originalname,
        files.forEach((file) => {
            filesData[count++] = {
                file_id: file._id,
                filename: file.filename,
                contentType: file.contentType,
                metadata:file.metadata
            }
        });
        res.status(201).json(filesData);
    });
  });
  
  






  router.get('/file/:filename', (req, res) => {
    gfs.collection('videos'); //set collection name to lookup into
  
    /** First check if file exists */
    gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // create read stream
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: "videos"
        });
        // set the proper content type 
        res.set('Content-Type', files[0].contentType)
        // Return response
        return readstream.pipe(res);
    });
  });
  
  router.delete('/file/:id', (req, res) => {
    gfs.remove(new mongoose.Types.ObjectId(req.params.id), (err, gridStore) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
  //req.params.filename
      res.status(200).send("File deleted Successfully");
    });
  });
  
  
  module.exports = router;