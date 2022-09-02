let valuesList = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    return valuesList[Math.floor(Math.random() * valuesList.length)]
}

function getStrengthOrder(playerSelection){
    playerSelection = playerSelection.toLowerCase()
    let myList;
   if (playerSelection === 'rock'){
    // switch(computerSelection){
    //     case 'rock': return aTie('rock')
    //     case 'paper':  return youLose('rock', 'paper')
    //     case 'scissors': return youWin('rock', 'scissors')
    // }   
    myList = ['rock', 'scissors', 'paper']
   }
   else if (playerSelection === 'paper'){
    myList = ['paper', 'rock', 'scissors']
   }
   else if (playerSelection === 'scissors'){
    myList = ['scissors', 'paper', 'rock']
   } 
   return myList
}

function playRound(playerSelection, computerSelection){
    let youWin = (value1, value2) => `You won!!. ${value1} beats ${value2}`;
   let youLose = (value1, value2) => `You lose!!. ${value2} beats ${value1}`;
   let aTie = (value1) => `You both chose ${value1}. it's a tie`;
   let orderList = getStrengthOrder(playerSelection)
   switch (computerSelection){
       case orderList[0]: return aTie(playerSelection);
       case orderList[1]: return youWin(playerSelection, computerSelection)
       case orderList[2]: return youLose(playerSelection, computerSelection)
        default: return 'You entered an invalid selection'
    } 
}

let playerSelection = prompt('Enter your selection').toLowerCase()
let computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
