// global variables
const resetBtn = document.querySelector(".reset");
resetBtn.disabled = true;
// Array.from() => Creates an array from a Node List
const boardTile = Array.from(document.querySelectorAll(".col"));
const playerOneTurn = document.querySelector(".player-1");
const playerTwoTurn = document.querySelector(".player-2");
playerTwoTurn.disabled = true;
const result = document.querySelector(".result");
let activePlayer = 1;

// function for deciding the winner between player 1 and player 2
const winnerDecidingFunction = () => {
    if(((boardTile[0].textContent !== "") && (boardTile[0].textContent === boardTile[1].textContent) && (boardTile[1].textContent === boardTile[2].textContent)) 
    || ((boardTile[3].textContent !== "") && (boardTile[3].textContent === boardTile[4].textContent) && (boardTile[4].textContent === boardTile[5].textContent)) 
    || ((boardTile[6].textContent !== "") && (boardTile[6].textContent === boardTile[7].textContent) && (boardTile[7].textContent === boardTile[8].textContent)) 
    || ((boardTile[0].textContent !== "") &&(boardTile[0].textContent === boardTile[3].textContent) && (boardTile[3].textContent === boardTile[6].textContent)) 
    || ((boardTile[1].textContent !== "") &&(boardTile[1].textContent === boardTile[4].textContent) && (boardTile[4].textContent === boardTile[7].textContent)) 
    || ((boardTile[2].textContent !== "") &&(boardTile[2].textContent === boardTile[5].textContent) && (boardTile[5].textContent === boardTile[8].textContent)) 
    || ((boardTile[0].textContent !== "") &&(boardTile[0].textContent === boardTile[4].textContent) && (boardTile[4].textContent === boardTile[8].textContent)) 
    || ((boardTile[2].textContent !== "") && (boardTile[2].textContent === boardTile[4].textContent) && (boardTile[4].textContent === boardTile[6].textContent)))
    {
        if(playerOneTurn.disabled === false){
            result.textContent = "Player 1 won!!!";
        }
        else{
            result.textContent = "Player 2 won!!!";
        }
        playerOneTurn.disabled = true;
        playerTwoTurn.disabled = true;
        return true;
    }
    else {
        if(boardTile.filter(tile => tile.textContent === "").length === 0){
            result.textContent = "Game Draw...Try Again!!!";
            playerOneTurn.disabled = true;
            playerTwoTurn.disabled = true;
        }
        return false;
    };
};

// for placing the cross or the circles on the board tile
boardTile.forEach(tile => {
    tile.addEventListener("click", () => {
        resetBtn.disabled = false;
        if(activePlayer === 1 && tile.textContent === ""){
            tile.textContent = "X";
            if(!winnerDecidingFunction()){
                activePlayer = 2;
                playerOneTurn.disabled = true;
                playerTwoTurn.disabled = false;
            }
            else {
                activePlayer = 0;
            }  
        }
        else if(activePlayer === 2 && tile.textContent === ""){
            tile.textContent = "O";
            if(!winnerDecidingFunction()){
                activePlayer = 1;
                playerOneTurn.disabled = false;
                playerTwoTurn.disabled = true;
            }
            else {
                activePlayer = 0;
            }
        }
    });
});

// for resetting the game to the initial state
resetBtn.addEventListener("click", () => {
    boardTile.forEach(tile => {
        tile.textContent = "";
    });
    playerOneTurn.disabled = false;
    playerTwoTurn.disabled = true;
    activePlayer = 1;
    resetBtn.disabled = true;
    result.textContent = "";
});





