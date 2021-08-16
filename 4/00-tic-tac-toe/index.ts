const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const copyboard: string[] = ["·", "·", "·", "·", "·", "·", "·", "·", "·"];
let board: string[] = copyboard.slice();
let player: string = "X";

welcome();

function welcome() {
  player = "X";
  console.clear();
  console.log("Welcome to tic tac toe");
  console.log(board);
  play();
}

function play(): void {
  for (let i = 0; i < 9; i++) {
    if (board[i] === "·") {
      rl.question(
        "It is now " + player + " turn" + "\nEnter value from 1 to 9 : ",
        (answer: number) => {
          move(answer);
          play();
        }
      );
    }
  }
}

function move(answer: number): void {
  let moveCheck = answer - 1;
  for (let i = 0; i < 9; i++) {
    if (moveCheck === i && board[i] === "·") {
      board[i] = player;
      if (player === "X") {
        console.log(board);
        player = "O";
      } else if (player === "O") {
        console.log(board);
        player = "X";
      }
    }
  }

  const winner = win();
  if (winner != "·") {
    console.log("Winner is " + winner);
    rest();
  }
  draw();
}

function win(): string {
  if (board[0] === board[1] && board[0] === board[2]) {
    return board[0];
  } else if (board[3] === board[4] && board[3] === board[5]) {
    return board[3];
  } else if (board[6] === board[7] && board[6] === board[8]) {
    return board[6];
  } else if (board[0] === board[3] && board[0] === board[6]) {
    return board[0];
  } else if (board[1] === board[4] && board[1] === board[7]) {
    return board[1];
  } else if (board[2] === board[5] && board[2] === board[8]) {
    return board[2];
  } else if (board[0] === board[4] && board[0] === board[8]) {
    return board[0];
  } else if (board[2] === board[4] && board[2] === board[6]) {
    return board[2];
  }
  return "·";
}

function draw(): void {
  let steps = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "X" || board[i] === "O") {
      steps++;
    }
    if (steps === 9) {
      console.log("It's a draw");
      rest();
    }
  }
}

function rest(): void {
  rl.question("Wanna play? y/n : ", (answer: string) => {
    switch (answer.toLowerCase()) {
      case "y":
        board = [...copyboard];
        welcome();
        break;
      case "n":
        console.log("Bye man! 😦 ");
        process.exit(0);
      default:
        console.log("Invalid answer!");
        rest();
    }
  });
}
