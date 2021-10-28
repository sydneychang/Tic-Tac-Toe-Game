let ticTacToe = require('./tic_tac_toe_game');
const net = require('net');
const readline = require('readline');
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const client = new net.Socket();
client.connect(2223, '127.0.0.1', function () {
    console.log('Connected');
    let clientBoard = new ticTacToe(3, 3);
    clientBoard.displayGameBoard();
    console.log("Enter the coordinates.\n");
    rline.on('line', (input) => {
        clientBoard.updateGameBoard(input);
        clientBoard.displayGameBoard();
        client.write(JSON.stringify(clientBoard));
    });

    /*rline.question("Enter the coordinates.\n", (answer) => {
        clientBoard.updateGameBoard(answer);
    });*/
});

client.on('data', function (data) {
    console.log('Received: ' + data);
    //client.destroy(); // kill client after server's response
});

client.on('close', function () {
    console.log('Connection closed');
});
