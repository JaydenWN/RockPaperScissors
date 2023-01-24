let compSelectSq = document.querySelector('#compSelectSq')
let userSelectSq = document.querySelectorAll('.selectSq')
let roundAnnouncement = document.querySelector('#roundAnnouncement')
let score = [0,0]
let compScoreDisp = document.querySelector('#pcScore')
let playerScoreDisp = document.querySelector('#playerScore')

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

// Decide who wins and update score array

function playGame(compChoice, useChoice){
    
    console.log(`Your Choice was ${userChoice} and the Computers Choice was ${computerChoice}`)

    if(useChoice !== 'rock' && useChoice !== 'paper' && useChoice !== 'scissors' ){
        return console.log(`${userChoice} is not a valid choice 😡 YOU LOOSE!`)
    }else if(compChoice === useChoice){
        roundAnnouncement.style.color = 'Black'
        return roundAnnouncement.innerHTML = 'DRAW'
    }else if(compChoice === 'rock' && useChoice ==='scissors'){
        score[0]++
        roundAnnouncement.style.color = 'red'
        return roundAnnouncement.innerHTML = 'LOOSE'
    }else if(compChoice === 'scissors' && useChoice ==='paper'){
        score[0]++
        roundAnnouncement.style.color = 'red'
        return roundAnnouncement.innerHTML = 'LOOSE'
    }else if(compChoice === 'paper' && useChoice ==='rock'){
        score[0]++
        roundAnnouncement.style.color = 'red'
        return roundAnnouncement.innerHTML = 'LOOSE'
    }else{
        score[1]++
        roundAnnouncement.style.color = 'green'
        return roundAnnouncement.innerHTML = 'WIN'
    }

}

//User Chooses, Computer Chooses, Computer shows display
userSelectSq.forEach(ele =>{
    ele.draggable = 'true'
    console.log(ele)
    ele.addEventListener('click', (e)=>{
        userChoice = ele.innerHTML.toLowerCase()
        getComputerChoice()
        compSelectSq.innerHTML = computerChoice.toUpperCase()
        playGame(computerChoice, userChoice)
        playerScoreDisp.innerHTML = `Player Score : ${score[1]}`
        compScoreDisp.innerHTML = `Computer Score : ${score[0]}`
        
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