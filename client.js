var net = require('net');
const readline = require('readline');
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var client = new net.Socket();
client.connect(2223, '127.0.0.1', function () {
    console.log('Connected');
    rline.on('line', (input) => {
        client.write(input);
    });
});

client.on('data', function (data) {
    console.log('Received: ' + data);
    //client.destroy(); // kill client after server's response
});

client.on('close', function () {
    console.log('Connection closed');
});