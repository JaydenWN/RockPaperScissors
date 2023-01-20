let computerChoice;

let getComputerChoice= (()=>{
   let randNum = Math.floor(Math.random(3) * 3)
   if(randNum === 0){
    computerChoice = 'Rock'
   }else  if(randNum === 1){
    computerChoice = 'Paper'
   }else{
    computerChoice = 'Scissors'
   }
})();

console.log(computerChoice)

let userChoice = window.prompt('What is your choice, Rock | Paper | Scissors').toLowerCase()

console.log(userChoice)
