console.log("Welcome TO Tic Tac Toe Game");
let audioTurn = new Audio('Tap-sound.mp3');
let isGameOver = false;
let turn = "X";

// Function to Change The turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isGameOver = true;
        }
    });
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "" && !isGameOver) {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});


document.getElementById('rest').addEventListener('click',()=>{
    Array.from(boxes).forEach(element=>{
        element.querySelector(".boxtext").innerText='';

    });
    isGameOver=false;
    turn="X"
    document.querySelector("info").innerText="Turn for X";
})