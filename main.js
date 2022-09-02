const para = document.querySelector('p')
const restart = document.querySelector('.nothing')



// Assign the values we use in the programs in a list
let valuesList = ["rock", "paper", "scissors"];
let computerPoints, playerPoints;
youwin = false;

// play full rock , paper, scissors first to five
rockPaperScissors();
switch (youwin){
  case 1: value = 'You Won';
  break;
  case -1: value = 'You Lost'
  break
  default: value = 'You didn\'t play'
}

para.style.display = 'block'
para.textContent = value

function rockPaperScissors() {
    
  computerPoints = 0;
  playerPoints = 0;
  while (true) {
    // get player choice
    let playerSelection = prompt("Enter your selection");
    if (playerSelection) playerSelection = playerSelection.toLowerCase();

    // get computer's choice
    let computerSelection = getComputerChoice();

   
    value = playRound(playerSelection, computerSelection);

    if (value == undefined) {
      console.log("Game Cancelled or no value supplied");
      break;
    }
  
    switch (value) {
      case 1:
        playerPoints += 1;
        break;
      case -1:
        computerPoints += 1;
        break;
    }

    console.log(
      `You - ${playerPoints} points.  Computer - ${computerPoints} points`
    );
    if (playerPoints == 5) {
      youwin = 1;
      break;
    } else if (computerPoints == 5) {
      youwin = -1
      break;
    }
  }
}

function getComputerChoice() {
  return valuesList[Math.floor(Math.random() * valuesList.length)];
}

function playRound(playerSelection, computerSelection) {
  let youWin = (value1, value2) => `You won!!. ${value1} beats ${value2}`;
  let youLose = (value1, value2) => `You lose!!. ${value2} beats ${value1}`;
  let aTie = (value1) => `You both chose ${value1}. it's a tie`;
  let orderList = getStrengthOrder(playerSelection);
  if (!orderList) return undefined;

  switch (computerSelection) {
    case orderList[0]:
      console.log(aTie(playerSelection));
      return 0;
    case orderList[1]:
      console.log(youWin(playerSelection, computerSelection));
      return 1;
    case orderList[2]:
      console.log(youLose(playerSelection, computerSelection));
      return -1;
    default:
      console.log("You entered an invalid selection");
      console.log("Enter 'rock', 'paper' or 'scissors' ")
      return 0;
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
