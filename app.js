let compSelectSq = document.querySelector('#compSelectSq')
let userSelectSq = document.querySelectorAll('.selectSq')
let roundAnnouncement = document.querySelector('#roundAnnouncement')


// Get how many rounds to play
// let chosenRounds = parseInt(window.prompt('How many rounds would you like to play?'))

// Get Computers Choice
let computerChoice;

// User Choice in global Scope
let userChoice;

function getComputerChoice(){
   let randNum = Math.floor(Math.random(3) * 3)
   if(randNum === 0){
    computerChoice = 'rock'
   }else  if(randNum === 1){
    computerChoice = 'paper'
   }else{
    computerChoice = 'scissors'
   }
};

// Decide who wins

function playGame(compChoice, useChoice){
    
    console.log(`Your Choice was ${userChoice} and the Computers Choice was ${computerChoice}`)

    if(useChoice !== 'rock' && useChoice !== 'paper' && useChoice !== 'scissors' ){
        return console.log(`${userChoice} is not a valid choice 😡 YOU LOOSE!`)
    }else if(compChoice === useChoice){
        return roundAnnouncement.innerHTML = 'DRAW'
    }else if(compChoice === 'rock' && useChoice ==='scissors'){
        return roundAnnouncement.innerHTML = 'LOOSE'
    }else if(compChoice === 'scissors' && useChoice ==='paper'){
        return roundAnnouncement.innerHTML = 'LOOSE'
    }else if(compChoice === 'paper' && useChoice ==='rock'){
        return roundAnnouncement.innerHTML = 'LOOSE'
    }else{
        return roundAnnouncement.innerHTML = 'WIN'
    }

}

//User Chooses, Computer Chooses, Computer shows display
userSelectSq.forEach(ele =>{
    ele.addEventListener('click', (e)=>{
        userChoice = ele.innerHTML.toLowerCase()
        getComputerChoice()
        compSelectSq.innerHTML = computerChoice.toUpperCase()
        playGame(computerChoice, userChoice)
    })
})


// Lets user set how many rounds to play, if a string return invalid input.

// function game(numRounds){
//     if(chosenRounds > 0){
//         userChoice = window.prompt('What is your choice, Rock | Paper | Scissors').toLowerCase()
//         for(let i = 0; i < numRounds; i++){
//             console.log(playGame(computerChoice, userChoice))
//             getComputerChoice()
//             if(i < numRounds - 1){
//                 userChoice = window.prompt('What is your choice, Rock | Paper | Scissors').toLowerCase()
//             }
            
//         }
//     }else{
//         console.log('Invalid input. Please type a number')
//     }
    
// }

game(chosenRounds)