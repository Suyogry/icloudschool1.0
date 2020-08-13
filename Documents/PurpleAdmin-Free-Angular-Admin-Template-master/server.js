const express =require('express');
const bodyParser =require('body-parser');
const api = require('./routes/api');
const updown=require('./routes/updown');
const attend=require('./routes/attendance');
const video=require('./routes/video_upload');
const path= require('path');
const cors =require('cors');
const http=require('http');

const app = express();

const port =process.env.PORT || 8880;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(cors());
app.use((req, res, next) => {
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




//app.use('/users',users);
//app.use(bodyParser.json());


//app.use(bodyParser.raw({limit:16000000000})); //mongo file limit 16MB
app.use('/api', api);
app.use('/updown',updown);
app.use('/attend',attend);
app.use('/video',video);
app.use(express.static(path.join(__dirname,'dist')));
app.get('/*',(req,res)=> res.sendFile(path.join(__dirname,'dist/index.html')));
//app.use("/images", express.static(path.join("backend/images")));



/*app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.append('Access-Control-Allow-Credentials', true);
  next();
});*/

app.get('/',function(req, res){
    res.send('Hello from server');
})
app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
/*const server=http.createServer(app);
server.listen(port,()=>console.log("Running"));*/