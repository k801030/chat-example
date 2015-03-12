var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.send('<script src="https://cdn.socket.io/socket.io-1.3.4.js"></script><h1>Hello world</h1><script>var socket = io();</script>');
});



io.on('connection', function(socket){
  console.log('a user is connected');
});

http.listen(3001, function(){

});

module.exports = app;