const net = require('net');
const readline = require('readline');
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const client = new net.Socket();
client.connect(2223, '127.0.0.1', function () {
    console.log('Connected');
    let gameBoard = generateEmptyGameBoard(3, 3);
    displayGameBoard(gameBoard);

    rline.question("Enter the coordinates.\n", (answer) => client.write(answer));
    /*rline.on('line', (input) => {
        client.write(input);
    });*/
});

client.on('data', function (data) {
    console.log('Received: ' + data);
    //client.destroy(); // kill client after server's response
});

client.on('close', function () {
    console.log('Connection closed');
});

function generateEmptyGameBoard(rows, columns) {
    let gameBoard = [];

    for (let r = 0; r < rows; r++) {
        let rowArray = [];
        for (let c = 0; c < columns; c++) {
            rowArray.push("_");
        }
        gameBoard.push(rowArray);
    }
    return gameBoard;
}

function displayGameBoard(gameBoard) {
    gameBoard.forEach((value) => console.log(value));
}
