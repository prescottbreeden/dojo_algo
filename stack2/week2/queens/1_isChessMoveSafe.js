function isChessMoveSafe(square, queen) {
  if (square.x === queen.x) return false;
  if (square.y === queen.y) return false;
  if (Math.abs(square.x - queen.x) === Math.abs(square.y - queen.y)) return false;
}

function CreateBoard() {
  let board = [];
  for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 8; x++) {
      board.push({x:x, y:y});
    }
  }
  return board;
}

function Queen(x, y) {
  return { 
    x: x,
    y: y
  }
}


let chessBoard = CreateBoard();
let bob = new Queen(7, 7);

let safe = isChessMoveSafe({x:1, y:1}, bob);
console.log(safe);
