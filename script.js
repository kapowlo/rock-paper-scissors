// making a simple rock-paper-scissors game

//1)first function getComputerChoice() will return rock paper or scissor
//I will pass this function as 2nd argument of firstRound()

function getComputerChoice(){
    //gets a random value from the array and returns the value that was picked
    let MoveSet =["rock","paper","scissors"];
    let aiMovePicked=MoveSet[Math.floor(Math.random()*MoveSet.length)]; //get a random word from the array MoveSet

    return  aiMovePicked;
}


// 2) now we create a function to play a single round of the game, it will take 2 parameters
function playRound(playerSelection,computerSelection) {
    //displays what the player and the computer picked,compares them and returns a string saying you won,lost or tied.
   // keeps track of the score, by showing how many  points the ai and player has after each round
    console.log(`the player has chosen ${playerSelection}`);
    console.log(`the computer has chosen ${computerSelection}`);
    
    if(playerSelection==="rock" && computerSelection==="paper"){
        console.log( "you lost! paper beats rock"); // put this console is func aiscore or playerscore
       return aiScore() ;
    }
    
    else if (playerSelection==="rock" && computerSelection==="scissors")
    {
        console.log( "you won! rock beats scissors  ");
       return  playerScore() ;
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        console.log( "you won! paper beats rock");
       return playerScore() ;

    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        console.log( "you lost! scissors beats  paper ");
       return aiScore() ;
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        console.log( "you won! scissors beats  paper ");
      return playerScore() ;

    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        console.log( "you lost! rock beats scissors  ");
      return aiScore() ;
    }
    else if (playerSelection==="scissors" && computerSelection==="scissors"){
      return "Tie game! you both picked scissors ";
        
    }
    else if (playerSelection==="paper" && computerSelection==="paper"){
      return "Tie game! you both picked paper";
       

    }
    else if (playerSelection==="rock" && computerSelection==="rock"){
       return "Tie game! you both picked rock ";
        

    }
    else if(playerSelection !=="rock","paper","scissors"){ // check for spelling mistakes
        console.log(`you entered the word ${playerSelection}`)
        return"make sure you spelled the word 'rock' 'paper' or 'scissors' correctly"
    }
    
}
let aiPoints =0;
let playerPoints = 0;
//2 helper functions to keep track of score and give points
function aiScore(){
   
    return `the computer now has ${aiPoints +=1} pts`;
}
function playerScore(){
   
    return `the player now has ${playerPoints +=1}pts `
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

