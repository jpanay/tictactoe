let s0 = document.querySelector('#s0');
let s1 = document.querySelector('#s1');
let s2 = document.querySelector('#s2');
let s3 = document.querySelector('#s3');
let s4 = document.querySelector('#s4');
let s5 = document.querySelector('#s5');
let s6 = document.querySelector('#s6');
let s7 = document.querySelector('#s7');
let s8 = document.querySelector('#s8');
let turnDisplay = document.querySelector('#turn');

let htmlBoard = [
  [s0,s1,s2],
  [s3,s4,s5],
  [s6,s7,s8]
];

let board = [
  ['_','_','_'],
  ['_','_','_'],
  ['_','_','_']
];

let currentTurn = 'X';

let init = () => {
  turnDisplay.innerHTML = `Current Turn: ${currentTurn}`
  for (let i = 0; i < htmlBoard.length; i++) {
    for (let u = 0; u < htmlBoard[i].length; u++) {
      htmlBoard[i][u].innerHTML = board[i][u];
    }
  }
}
init()


let setBoard = (row,col) => {
  let boardPos = board[row][col];
  boardPos = currentTurn;
  let htmlPos = htmlBoard[row][col];
  if (htmlPos.innerHTML !== ('X' || 'O')) {
    htmlPos.innerHTML = boardPos;
    currentTurn === 'X' ? currentTurn = 'O' : currentTurn = 'X';
    turnDisplay.innerHTML = `Current Turn: ${currentTurn}`;
  }

}

s0.addEventListener("click", () => {setBoard(0,0)});
s1.addEventListener("click", () => {setBoard(0,1)});
s2.addEventListener("click", () => {setBoard(0,2)});
s3.addEventListener("click", () => {setBoard(1,0)});
s4.addEventListener("click", () => {setBoard(1,1)});
s5.addEventListener("click", () => {setBoard(1,2)});
s6.addEventListener("click", () => {setBoard(2,0)});
s7.addEventListener("click", () => {setBoard(2,1)});
s8.addEventListener("click", () => {setBoard(2,2)});