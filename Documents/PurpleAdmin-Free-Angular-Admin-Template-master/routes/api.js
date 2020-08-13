const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const checkAuth= require('../middleware/check-auth');
const multer = require('multer');
const bcrypt = require('bcrypt');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const path = require('path');
const crypto = require('crypto');
//const db = "mongodb://testuser:testpw@ds123136.mlab.com:23136/eventsdb";
//const db='mongodb+srv://shubham:shubham@cluster0-bsw0a.mongodb.net/mongouploads?retryWrites=true&w=major';
//const db="mongodb+srv://mongouser:mongopass@oceanmaster-p2lag.mongodb.net/eventsdb?retryWrites=true&w=major";
const db= "mongodb+srv://schooladmin:schooladmin@cluster0.p2lag.mongodb.net/eventsdb";


const conn = mongoose.createConnection(db);
mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Request-Method",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



//all about file uploads
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  //gfs.collection('book_uploads');
  gfs.collection('assignment_answer');
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
          subject: req.body.subject/*,
          email: req.userData.email,
          userId: req.userData.userId*/,
          originalname: file.originalname,
          a_q_id: req.body.a_q_id
        }]
        console.log(metadata);
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          metadata: metadata,
          filename: filename,
          bucketName: 'assignment_answer'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });






router.get('/profile',checkAuth, (req, res) => {
  let books=[];
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      //result={}
      res.status(201).json({ files: false,message:"No files present" });
    } else {
      files.map(file => {
        if (
          file.contentType === 'application/pdf'
        ) {
          file.isOther = true;
        } else {
          file.isOther = false;
        }
      });
      this.books=files
      res.status(200).json(files);
    }
  });
})


router.post('/assignmentbysubnid',checkAuth, (req, res) => {
  console.log({'subject of book':req.body.subject});
  let books=[];
  gfs.files.find(/*{"metadata.subject": req.body.subject,"metadata.userId":req.userData.userId}*/).toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      //result={}
      res.status(201).json({ files: false,message:"No files present" });
    } else {
      this.books=files
      res.status(200).json(files);
    }
  });
})

router.post('/booksbysubject',checkAuth, (req, res) => {
  console.log({'subject of book':req.body.subject});
  let books=[];
  gfs.files.find({"metadata.subject": req.body.subject}).toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      //result={}
      res.status(201).json({ files: false,message:"No files present" });
    } else {
      this.books=files
      res.status(200).json(files);
    }
  });
})


router.post("/register", (req, res, next) => {
  console.log("Register Request Body",req.body)
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      userType: req.body.userType,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      Class:req.body.Class, 
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
          error: "User already Present!!"
        });
      });
  });
});

router.post("/login", (req, res, next) => {
  let fetchedUser;
  console.log(req.body);
  User.findOne({ email: req.body.email, userType: req.body.userType })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "User Not Present"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);  
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Incorrect Password"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Something wrong"
      });
    });
});



router.post('/fileupload',checkAuth,upload.single('file'),(req, res)=>{
  console.log('body',req.body);
  //console.log(req.userData);
  //res.status(200).send({message:"From book upload API"});
  res.status(200).json({file_uploaded: true});
  
})


router.post('/buploader',checkAuth,upload.single('book'),(req, res)=>{
    console.log("Request Body:",req.body)
   // console.log(req.userData);
   //console.log(req);
    res.status(200).json({'hi':'there'});
    
})

router.post('/assignupload'/*,checkAuth*/,upload.single('assignment'),(req, res)=>{
  console.log("Request Body:",req.body)
 // console.log(req.userData);
 //console.log(req);
  res.status(200).json({'hi':'there from Assignment'});
  
})



router.post('/auploader'/*,upload.single('assignments')*/,(req, res)=>{
  //console.log(req.file)
  //console.log(req.userData);
  console.log("request body:",req.body);
  //console.log({"subject":req.body.subject})
  res.status(200).send("Nothing");
})

router.get('/aboutSchool',checkAuth, (req, res) => {
  console.log("I am in aboutSchool API");
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    // Files exist
    return res.json(files);
  });  
});


router.get('/assignment_by_id',(req, res) => {
  let filesData = [{
    originalname:'',
    filename:'',
    contentType:'',
    metadata:''
  }
  ];
  let count = 0;
  gfs.collection('assignment_answer'); // set the collection to look up into
  console.log("Request Query:",req.query);
  gfs.files.find({"metadata.subject": req.query.a_q_id}).toArray((err, files) => {
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
  gfs.collection('assignment_answer'); //set collection name to lookup into

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
          root: "assignment_answer"
      });
      // set the proper content type 
      res.set('Content-Type', files[0].contentType)
      // Return response
      return readstream.pipe(res);
  });
});


router.get('/files', (req, res) => {
  let filesData = [{
    originalname:'',
    filename:'',
    contentType:'' 
  }
  ];
  let count = 0;
  gfs.collection('assignment_answer'); // set the collection to look up into

  gfs.files.find({}).toArray((err, files) => {
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
              contentType: file.contentType
          }
      });
      res.json(filesData);
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