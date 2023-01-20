// Get Computers Choice
let computerChoice;

let getComputerChoice= (()=>{
   let randNum = Math.floor(Math.random(3) * 3)
   if(randNum === 0){
    computerChoice = 'rock'
   }else  if(randNum === 1){
    computerChoice = 'paper'
   }else{
    computerChoice = 'scissors'
   }
})();

console.log(computerChoice)
// Get users choice
let userChoice = window.prompt('What is your choice, Rock | Paper | Scissors').toLowerCase()

console.log(userChoice)

// Decide who wins

function playGame(compChoice, useChoice){
    if(userChoice != 'rock' | 'paper' | 'scissors'){
        return window.alert('Invalid Input')
    }

    if(computerChoice === userChoice){
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