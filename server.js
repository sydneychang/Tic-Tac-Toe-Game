var net = require('net');

var server = net.createServer(function (socket) {
    //socket.write('Echo server\n');
    socket.on('data', function (data) {
        socket.write(data);
    });
    socket.on('end', socket.end);
});

server.listen(2223, '127.0.0.1');

