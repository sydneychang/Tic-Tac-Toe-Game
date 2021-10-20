let net = require('net');

let server = net.createServer(function (socket) {
    //socket.write('Echo server\n');
    socket.on('data', function (data) {
        //socket.write(data);
        console.log(data.toString());
    });
    socket.on('end', socket.end);
});

server.listen(2223, '127.0.0.1');

