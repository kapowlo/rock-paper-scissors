// making a simple rock-paper-scissors game

//1)first function getComputerChoice() will return rock paper or scissor
//I will pass this function as 2nd argument of firstRound()

function getComputerChoice(){
    //gets a random value from the array and returns the value that was picked
    let MoveSet =["rock","paper","scissors"];
    let aiMovePicked=MoveSet[Math.floor(Math.random()*MoveSet.length)]; //get a random word from the array MoveSet

    return  aiMovePicked;
}

let playerScore=0;
let aiScore=0;
// 2) now we create a function to play a single round of the game, it will take 2 parameters
function playRound(playerSelection,computerSelection) {
    //displays what the player and the computer picked,compares them and returns a string saying you won,lost or tied.
   // keeps track of the score, by showing how many  points the ai and player has after each round
    console.log(`the player has chosen ${playerSelection}`);
    console.log(`the computer has chosen ${computerSelection}`);
    
    if(playerSelection==="rock" && computerSelection==="paper"){
        console.log( "you lost! paper beats rock");
        console.log(`here's one point for the ai:  ${aiScore +=1} `)
    }
    
    else if (playerSelection==="rock" && computerSelection==="scissors")
    {
        console.log( "you won! rock beats scissors  ");
        console.log(`here's one point for the player: ${playerScore +=1}`) 
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        console.log( "you won! paper beats rock");
        console.log(`here's one point for the player: ${playerScore +=1}`) 

    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        console.log( "you lost! scissors beats  paper ");
        console.log(`here's one point for the ai:  ${aiScore +=1} `)
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        console.log( "you won! scissors beats  paper ");
        console.log(`here's one point for the player: ${playerScore +=1}`) 

    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        console.log( "you lost! rock beats scissors  ");
        console.log(`here's one point for the ai:  ${aiScore +=1} `)
    }
    else if (playerSelection==="scissors" && computerSelection==="scissors"){
        console.log( "Tie game! you both picked scissors ");
        
    }
    else if (playerSelection==="paper" && computerSelection==="paper"){
        console.log( "Tie game! you both picked paper");
       

    }
    else if (playerSelection==="rock" && computerSelection==="rock"){
        console.log( "Tie game! you both picked rock ");
        

    }
    console.log(`The ai has ${aiScore}pts and the player has ${playerScore}pts`)
     
    if (aiScore > playerScore){
        return "the computer has more pts!"
    }
   else  if (aiScore < playerScore){
        return "the player has more pts!!!!"
    }
    else if (aiScore === playerScore){
        return "both the player and the ai have the same amount of pts"
    }
}



//I'll make a function that plays five rounds of the game
//I'll create a function called game() that will have a for loop that calls playRound() 5 times
//the user will also be asked 5 times to chose between rock paper scissors
function game(){  
//this function will allow us to play five rounds of rock paper scissors 
// by prompting the user for an input and by calling playRound() five times inside of a for loop 

for (let i=0;i<5;i++){
    let playerMovePicked=prompt("pick one option between rock,paper or scissors,")
    let playerMovePickedLower=playerMovePicked.toLowerCase()
    console.log("\n")// blank line to separate each rounds
    console.log (playRound(playerMovePickedLower,getComputerChoice()))
    
}

}
game()

