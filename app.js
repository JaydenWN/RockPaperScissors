// Get Computers Choice
let computerChoice;

let getComputerChoice= (()=>{
   let randNum = Math.floor(Math.random(3) * 3)
   if(randNum === 0){
    computerChoice = 'Rock'
    computerChoice = 'rock'
   }else  if(randNum === 1){
    computerChoice = 'Paper'
    computerChoice = 'paper'
   }else{
    computerChoice = 'Scissors'
    computerChoice = 'scissors'
   }
})();

console.log(computerChoice)

// Get users choice
let userChoice = window.prompt('What is your choice, Rock | Paper | Scissors').toLowerCase()

console.log(typeof userChoice)

// Decide who wins

function playGame(compChoice, useChoice){
    if(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors' ){
        return window.alert('Invalid Input')
    }else if(computerChoice === userChoice){
        return 'Its a draw'
    }else if(computerChoice === 'rock' && userChoice ==='scissors'){
        return 'You loose'
    }else if(computerChoice === 'scissors' && userChoice ==='paper'){
        return 'You loose'
    }else if(computerChoice === 'paper' && userChoice ==='rock'){
        return 'You loose'
    }else{
        return 'You Win'
    }

}

console.log(playGame(computerChoice, userChoice))