var express = require('express');
var http = require('http');
var cors = require('cors');
var socketio = require('socket.io');
var io;

var connections = [];

var app = express();
app.use(cors());
server = http.createServer(app);

// Do this!
app.get('/messages', (req, res) => {

});

server.listen(9000, () => {
  console.log('Listening on port ', 9000);
});

// Socket IO:
io = socketio(server);
io.on('connection', (socket) => {
  connections.push(socket);
  console.log('Connected: sockets connected  ', connections.length);

  socket.on('new-user', (data) => {
    // console.log(data);
    console.log(connections);
    socket.username = data;
  });

  socket.on('send message', (data) => {
    console.log(data);
    io.emit('new message', data);
  });

  socket.on('disconnect', (data) => {
    if (!socket.username) return;

    connections.splice(connections.indexOf(socket, 1));
    console.log('Disconnected: sockets connected ', connections.length);
  });
});
