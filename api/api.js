var express = require('express');
var http = require('http');
var cors = require('cors');
var socketio = require('socket.io');
var io;

var database = require('./db/db');
var generate = require('./response-message-generator');
var connections = [];

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
  connections.push(socket);
  console.log('Connected: sockets connected  ', connections.length);

  socket.on('new user', (data) => {
    socket.username = data;
  });

  socket.on('send message', (data) => {
    database.post(data);
    io.emit('new message', data);

    setTimeout(() => {
      generate(data.count).then(response => {
        database.post(response);
        io.emit('new message', response);
      })
    }, 1000);
  });

  socket.on('disconnect', (data) => {
    if (!socket.username) return;

    connections.splice(connections.indexOf(socket, 1));
    console.log('Disconnected: sockets connected ', connections.length);
  });
});
