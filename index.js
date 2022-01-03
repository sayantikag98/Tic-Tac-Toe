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
    || ((boardTile[0].textContent !== "") && (boardTile[0].textContent === boardTile[3].textContent) && (boardTile[3].textContent === boardTile[6].textContent)) 
    || ((boardTile[1].textContent !== "") && (boardTile[1].textContent === boardTile[4].textContent) && (boardTile[4].textContent === boardTile[7].textContent)) 
    || ((boardTile[2].textContent !== "") && (boardTile[2].textContent === boardTile[5].textContent) && (boardTile[5].textContent === boardTile[8].textContent)) 
    || ((boardTile[0].textContent !== "") && (boardTile[0].textContent === boardTile[4].textContent) && (boardTile[4].textContent === boardTile[8].textContent)) 
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

const helperFunc = (ind1, ind2, ind3) => {
    boardTile[ind1].style.color = "red";
    boardTile[ind2].style.color = "red";
    boardTile[ind3].style.color = "red";
    boardTile[ind1].style.backgroundColor = "yellow";
    boardTile[ind2].style.backgroundColor = "yellow";
    boardTile[ind3].style.backgroundColor = "yellow";
}

const colorWiningStreak = () => {
    if((boardTile[0].textContent === boardTile[1].textContent) && (boardTile[1].textContent === boardTile[2].textContent)){
        helperFunc(0, 1, 2);
    }
    else if((boardTile[0].textContent === boardTile[4].textContent) && (boardTile[4].textContent === boardTile[8].textContent)){
        helperFunc(0, 4, 8);
    }
    else if((boardTile[0].textContent === boardTile[3].textContent) && (boardTile[3].textContent === boardTile[6].textContent)){
        helperFunc(0, 3, 6);
    }
    else if((boardTile[2].textContent === boardTile[5].textContent) && (boardTile[5].textContent === boardTile[8].textContent)){
        helperFunc(2, 5, 8);
    }
    else if((boardTile[6].textContent === boardTile[7].textContent) && (boardTile[7].textContent === boardTile[8].textContent)){
        helperFunc(6, 7, 8);
    }
    else if((boardTile[2].textContent === boardTile[4].textContent) && (boardTile[4].textContent === boardTile[6].textContent)){
        helperFunc(2, 4, 6);
    }
    else if((boardTile[1].textContent === boardTile[4].textContent) && (boardTile[4].textContent === boardTile[7].textContent)){
        helperFunc(1, 4, 7);
    }
    else if((boardTile[3].textContent === boardTile[4].textContent) && (boardTile[4].textContent === boardTile[5].textContent)){
        helperFunc(3, 4, 5);
    }
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
                colorWiningStreak();
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
                colorWiningStreak();
            }
        }
    });
});

// for resetting the game to the initial state
resetBtn.addEventListener("click", () => {
    boardTile.forEach(tile => {
        tile.textContent = "";
        tile.style.color = "#557C55";
        tile.style.backgroundColor = "#F2FFE9";
    });
    playerOneTurn.disabled = false;
    playerTwoTurn.disabled = true;
    activePlayer = 1;
    resetBtn.disabled = true;
    result.textContent = "";
});





