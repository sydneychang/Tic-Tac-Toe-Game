class TicTacToeGame {
    constructor(rows, columns) {
        this.gameBoard = [];
        this.rows = rows;
        this.columns = columns;

        this.generateGameBoard();
    }

    generateGameBoard() {
        for (let r = 0; r < this.rows; r++) {
            let rowArray = [];
            for (let c = 0; c < this.columns; c++) {
                rowArray.push("_");
            }
            this.gameBoard.push(rowArray);
        }
    }

    displayGameBoard() {
        this.gameBoard.forEach((value) => console.log(value));
        console.log("\n");
    }

    updateGameBoard(input) {
        const parseInput = input.split(",");
        const position = { xCoordinate: parseInput[0], yCoordinate: parseInput[1] };
        this.gameBoard[position.yCoordinate][position.xCoordinate] = "X";
    }
}

module.exports = TicTacToeGame;
/*module.exports = {
    ticTacToeGame: TicTacToeGame,
};*/

/*
ticTacToeGame.displayGameBoard();
let input = "2,1";
ticTacToeGame.updateGameBoard(input);
console.log("\n\n");
ticTacToeGame.displayGameBoard();
*/



