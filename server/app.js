var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./routes');
var mongoose = require('mongoose');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect('mongodb://listituser:listitpwd@ds015720.mlab.com:15720/listit');


app.use('/',routes);

var port = process.env.PORT || 3000;

app.listen(port,function(){
  console.log("Listening on port: " + port);
})
