var express = require('express');
var http = require('http');

var app = express();
http.Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});


module.exports = app;