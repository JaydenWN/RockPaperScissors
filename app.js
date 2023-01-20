// Get how many rounds to play
let chosenRounds = parseInt(window.prompt('How many rounds would you like to play?'))

// Get Computers Choice
let computerChoice;

// User Choice in global Scope
let userChoice;

function getComputerChoice(){
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
};
getComputerChoice()

// Decide who wins

function playGame(compChoice, useChoice){
    
    console.log(`Your Choice was ${userChoice} and the Computers Choice was ${computerChoice}`)
    if(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors' ){
        return `${userChoice} is not a valid choice 😡 YOU LOOSE!`
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

// Lets user set how many rounds to play, if a string return invalid input.

function game(numRounds){
    if(chosenRounds > 0){
        userChoice = window.prompt('What is your choice, Rock | Paper | Scissors').toLowerCase()
        for(let i = 0; i < numRounds; i++){
            console.log(playGame(computerChoice, userChoice))
            getComputerChoice()
            if(i < numRounds - 1){
                userChoice = window.prompt('What is your choice, Rock | Paper | Scissors').toLowerCase()
            }
            
        }
    }else{
        console.log('Invalid input. Please type a number')
    }
    
}

game(chosenRounds)