var express = require('express');
var http = require('http');
var cors = require('cors');
var socketio = require('socket.io');
var io;

var app = express();
app.use(cors());
server = http.createServer(app);


// Do this!
app.get('/messages', (req, res) => {
  database.get().then(data => res.send(data));
});

server.listen(9000, () => {
  console.log('Listening on port ', 9000);
});

// Socket IO:
io = socketio(server);
io.on('connection', (socket) => {

});
