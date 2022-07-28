var express = require('express');
const https = require("https");
const fs = require("fs");

var app = express();
var request = require('request');
var multer = require('multer');
var upload = multer();
 // for parsing application/json
app.use(express.json()); 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use((error, req, res, next) => {
  console.log('This is the rejected field ->', error.field);
});

app.post('/TestWebhook', upload.any(), function(req, res){

  console.log(req.body);

  res.send('OK');

});



https

  .createServer(

    // Provide the private and public key to the server by reading each

    // file's content with the readFileSync() method.

    {

      key: fs.readFileSync("key.pem"),

      cert: fs.readFileSync("cert.pem"),

    },

    app

  )

  .listen(8088, () => {

    console.log("serever is runing at port 4000");

  });