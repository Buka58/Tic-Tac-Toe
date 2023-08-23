function checkIfGameWon(first, second, third) {
  // console.log('checkIfGameWon')
  if (display.textContent.includes("won the game")) {
    return;
  }
  if (
    buttons[first].textContent === "X" &&
    buttons[second].textContent === "X" &&
    buttons[third].textContent === "X"
  ) {
    console.log("First check for player 1");
    disableButtonsWhenWon("Player 1");
    return;
  } else if (
    buttons[first].textContent === "O" &&
    buttons[second].textContent === "O" &&
    buttons[third].textContent === "O"
  ) {
    console.log("First check for player 2");

    disableButtonsWhenWon("Player 2");

    return;
  } else {
    checkDraw();
  }
}

function checkGameStatus() {
  //check if the game has been won horizontally
  checkIfGameWon(0, 1, 2);
  checkIfGameWon(3, 4, 5);
  checkIfGameWon(6, 7, 8);
  //check if game is won vertically
  checkIfGameWon(0, 3, 6);
  checkIfGameWon(1, 4, 7);
  checkIfGameWon(2, 5, 8);
  //check if game is won diagonally
  checkIfGameWon(0, 4, 8);
  checkIfGameWon(2, 4, 6);
  // disableButtonWhenWon();
}
function disableButtonsWhenWon(player) {
  console.log("Got called");
  for (let button of buttons) {
    if (button.textContent === "") {
      button.toggleAttribute("disabled");
    }
    console.log(button);
  }
  display.textContent = player + "won the game";
}

function checkDraw() {
  for(let button of buttons){
    if (button.textContent === "") {
      return;
    }
  }
  display.textContent = "It's A Draw";
}
