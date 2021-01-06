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
let winStatus = document.querySelector('#winner');
let xWinsCount = document.querySelector('#x-wins');
let oWinsCount = document.querySelector('#o-wins');

let htmlBoard = [
  [s0,s1,s2],
  [s3,s4,s5],
  [s6,s7,s8]
];

let board, currentTurn, winner, moves;
let lastWinner = 'X'
let xWins = 0
let oWins = 0

let reset = () => {
  currentTurn = lastWinner;
  winner = false;
  moves = 0;
  board = [
    ['_','_','_'],
    ['_','_','_'],
    ['_','_','_']
  ];
  winStatus.innerHTML = 'Winner: ';
  turnDisplay.innerHTML = `Current Turn: ${currentTurn}`;
  xWinsCount.innerHTML = `X Wins: ${xWins}`
  oWinsCount.innerHTML = `O Wins: ${oWins}`
  for (let i = 0; i < htmlBoard.length; i++) {
    for (let u = 0; u < htmlBoard[i].length; u++) {
      htmlBoard[i][u].innerHTML = board[i][u];
    }
  }
}
reset()

let checkWin = () => {
  for (let i = 0; i < board.length; i++) {
    let rowWin = board[i][1] !== '_' && board[i][0] === board[i][1] && board[i][1] === board[i][2]
    let colWin = board[1][i] !== '_' && board[0][i] === board[1][i] && board[1][i] === board[2][i]
    let majorDiagWin = board[1][1] !== '_' && board[0][2] === board[1][1] && board[1][1] === board[2][0]
    let minorDiagWin = board[1][1] !== '_' && board[0][0] === board[1][1] && board[1][1] === board[2][2]
    if (rowWin || colWin || majorDiagWin || minorDiagWin) {
      winner = true
      lastWinner = currentTurn
      winStatus.innerHTML = `Winner: ${currentTurn}`
      currentTurn === 'X' ? xWins++ : oWins++
      xWinsCount.innerHTML = `X Wins: ${xWins}`
      oWinsCount.innerHTML = `O Wins: ${oWins}`
      return
    }
    if (moves === 9) {
      winStatus.innerHTML = `Winner: TIE`
      return
    }
  }
}

let setBoard = (row,col) => {
  if (htmlBoard[row][col].innerHTML !== ('X' || 'O') && !winner) {
    moves++
    console.log(moves)
    board[row][col] = currentTurn;
    htmlBoard[row][col].innerHTML = board[row][col];
    checkWin()
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