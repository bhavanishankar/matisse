var app = require('express').createServer()
  , io = require('socket.io').listen(app);

app.listen(8000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('eventDraw',function(data){
	socket.broadcast.emit("eventDraw",data);
  });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
