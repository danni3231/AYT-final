const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const socketIO = require('socket.io');

app.use(express.static(__dirname+'/public'));

const io = socketIO(server);

server.listen(8080, ()=>{
    console.log('server listening on port', 8080);
});

//arduino

var five = require('johnny-five');

var board = new five.Board();

board.on('ready', function () {

    var piezo = new five.Piezo(3);

    // Injects the piezo into the repl
    board.repl.inject({
      piezo: piezo
    });


    io.on('connection', function (socket) {

        socket.on('30', function (){
          piezo.frequency(30, 100);
            
        });

        socket.on('100', function (){
          piezo.frequency(100, 100);

        });

        socket.on('250', function (){
          piezo.frequency(250, 100);
        });

    });
    
});

let selectWords = ['key A','key S','key D','key F','key J','key K','key L'];

let username;

io.on('connection', function (socket) {

  socket.on('add', function (data){
    selectWords[data.index] = data.text;
  });

  socket.on('setUsername', function (data){
    username = data;
    console.log(username);
  });

  socket.on('getWords', function (){
    socket.emit('words', selectWords);
  });

  socket.on('getUsername', function (){
    socket.emit('username', username);
  });


});
