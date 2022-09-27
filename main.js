// Variable Declarations
const restart = document.querySelector('button')
const start = document.querySelector('.start_game')
const selections = document.querySelectorAll('[data-choice]')
const valuesList = ["rock", "paper", "scissors"];
const playerPoints = document.querySelector('.score__individual')
const computerPoints = document.querySelector('.score__computer')
const playerTile = document.querySelector('.player__tile')
const computerTile = document.querySelector('.computer__tile')
const message = document.querySelector('.message')
hasStarted = false;
let highestScore;
let winnerNode;


// Start the game
start.addEventListener('click', (e) => {
  let playButton = e.target
  if (!hasStarted) startGame(playButton)
  else endGame(playButton)
})
  

// When game is on
function startGame(playButton) {
  highestScore = 0;
  hasStarted = true
  playerPoints.innerText = computerPoints.innerHTML = 0
  playerTile.style.backgroundColor = 'unset'
  computerTile.style.backgroundColor = 'unset'
  start.classList.remove('ended')
  start.classList.add('end_button')
  playButton.innerText = 'END GAME'
  message.innerHTML = 'Choose your weapon <img src="weapon.png"/>'
  
  selections.forEach(selection => {
    selection.classList.add('started')
    selection.addEventListener('click', rockPaperScissors)
})
}


// When game is ended
function endGame(playButton){
  hasStarted = false
  playButton.innerText = 'Restart'
  message.innerText = 'Click Start to begin game'
  start.classList.add('ended')
  start.classList.remove('end_button')

  if (highestScore == 5){
    message.innerHTML = getWinner(playerPoints.innerText, computerPoints.innerText)
  }
  selections.forEach(selection => {
    selection.classList.remove('started')
    selection.removeEventListener('click', rockPaperScissors)
})
}

// One round of game
function rockPaperScissors() {
   playerSelection = this.dataset.choice
  computerSelection = getComputerChoice()
    value = playRound(playerSelection, computerSelection);
    switch (value) {
      case 1:
        highestScore = playerPoints.innerText = parseInt(playerPoints.innerText) + 1;
        winnerNode = playerPoints
        break;
      case -1:  
      highestScore = computerPoints.innerText = parseInt(computerPoints.innerText) + 1 ;
      winnerNode = computerPoints  
      break;
    }

    // First to reach 5 wins
      if (highestScore == 5) {
        endGame(start)
        winnerNode.parentElement.style.backgroundColor = 'hsl(135, 100%, 50%)'
      }
}


// Computer selections
function getComputerChoice() {
  return valuesList[Math.floor(Math.random() * valuesList.length)];
}

// Using the choices, determine the winnner
function playRound(playerSelection, computerSelection) {
  let youWin = (value1, value2) => `You won!!. ${value1} beats ${value2}`;
  let youLose = (value1, value2) => `You lose!!. ${value2} beats ${value1}`;
  let aTie = (value1) => `You both chose ${value1}. it's a tie`;
  let orderList = getStrengthOrder(playerSelection);

  switch (computerSelection) {
    case orderList[0]:
      message.innerText = aTie(playerSelection);
      return 0;
    case orderList[1]:
      message.innerText = youWin(playerSelection, computerSelection);
      return 1;
    case orderList[2]:
      message.innerText = youLose(playerSelection, computerSelection);
      return -1;

  }
}

function getStrengthOrder(playerSelection) {
  if (!playerSelection) return null;
  let myList = [];
  if (playerSelection === "rock") {
    myList = ["rock", "scissors", "paper"];
  } else if (playerSelection === "paper") {
    myList = ["paper", "rock", "scissors"];
  } else if (playerSelection === "scissors") {
    myList = ["scissors", "paper", "rock"];
  }
  return myList;
}

function getWinner(player, computer) {
  let result = player > computer ? 'Winner!!! 🕺🕺. Click start to play again'
  : 'Game over 😞😞. Click Restart to try again'
  return result
}