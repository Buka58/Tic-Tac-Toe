let lastValue = "O";
// let firstValue = "X";
let display = document.getElementById("display");
display.textContent = "Player's 1 Turn To Play";

let buttons = document.querySelectorAll(".box");
for (let button of buttons) {
  button.addEventListener("click", () => {
    if (button.textContent !== "") {
      return;
    }
    if (lastValue === "O") {
      button.textContent = "X";
      lastValue = "X";
      display.textContent = "Player 2's Turn To Play";
      checkGameStatus()
    } else {
      button.textContent = "O";
      lastValue = "O";
      display.textContent = "Player 1's Turn To Play";
      checkGameStatus();
    }
  });
}
let restartBtn = document.getElementById("button2");
restartBtn.addEventListener("click", ()=>{
  window.location.href = "index.html";
});