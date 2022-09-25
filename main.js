const restart = document.querySelector('button')
const start = document.querySelector('.start_game')
const selections = document.querySelectorAll('[data-choice]')
const valuesList = ["rock", "paper", "scissors"];
const playerPoints = document.querySelector('.score__individual')
const computerPoints = document.querySelector('.score__computer')
const message = document.querySelector('.message')
youwin = false;
let highestScore;


start.addEventListener('click', (e) => {
  let playButton = e.target
  if (playButton.innerText == 'START GAME') startGame(playButton)
  else endGame(playButton)
})
  

function startGame(playButton) {
  playerPoints.innerText = computerPoints.innerHTML = 0
  playButton.innerText = 'END GAME'
  message.innerText = 'Choose your weapon'
  selections.forEach(selection => {
    selection.addEventListener('click', rockPaperScissors)
})
}

function endGame(playButton){
  playButton.innerText = 'START GAME'
  message.innerText = 'Click Start to begin game'
  if (highestScore == 5){
    message.innerHTML = getWinner(playerPoints.innerText, computerPoints.innerText)
  }
  selections.forEach(selection => {
    selection.removeEventListener('click', rockPaperScissors)
})
}











// Assign the values we use in the programs in a list




function rockPaperScissors() {
    
  
   playerSelection = this.dataset.choice
  computerSelection = getComputerChoice()
    value = playRound(playerSelection, computerSelection);
    switch (value) {
      case 1:
        highestScore = playerPoints.innerText = parseInt(playerPoints.innerText) + 1;
        break;
      case -1:
        
      highestScore = computerPoints.innerText = parseInt(computerPoints.innerText) + 1 ;
        break;
    }
      if (highestScore == 5) endGame(start)
  }



function getComputerChoice() {
  return valuesList[Math.floor(Math.random() * valuesList.length)];
}

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
  : 'Game over 😞😞. Click start to try again'
  return result
}