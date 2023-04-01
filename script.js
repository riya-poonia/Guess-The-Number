"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // WHEN NO INPUT
  if (!guess) {
    displayMessage("🚫 No Number! ");
  }
  // WHEN GUESS IS CORRECT
  else if (guess === secretNumber) {
    displayMessage("🥳 Correct Guess!");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }
  // WHEN GUESS IS WRONG
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📈 Guess is high!" : "📉 Guess is low!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("👻 You Lost");
      score--;
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //reset secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  //reset style
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing ... ");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  //reset input field
  document.querySelector(".guess").value = null;
});
