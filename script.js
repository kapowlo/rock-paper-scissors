// making a simple rock-paper-scissors game

//1)first function getComputerChoice() will return rock paper or scissor
//I will pass this function as 2nd argument of playRound()

function getComputerChoice(){
    //gets a random value from the array and returns the value that was picked
    let MoveSet =["rock","paper","scissors"];
    let aiMovePicked=MoveSet[Math.floor(Math.random()*MoveSet.length)]; //get a random word from the array MoveSet

    return  aiMovePicked;
}


//create global variables that will store player and ai points and at the end I'll show a winner
let aiPoints =0; // when computer wins a round add + 1 to this inside of playRound()
let playerPoints=0;// when player wins a round add + 1 to this inside of playRound()

// 2) now I'll create a function to play a single round of the game, it will take 2 parameters
function playRound(playerSelection,computerSelection) {
    //displays what the player and the computer picked,compares them and returns a string saying you won,lost or tied.
   // keeps track of the score, by showing how many  points the ai and player has after each round
    console.log(`the player has chosen ${playerSelection}`);
    console.log(`the computer has chosen ${computerSelection}`);
    
    if(playerSelection==="rock" && computerSelection==="paper"){
        console.log( "you lost! paper beats rock"); // put this console is func aiscore or playerscore
        console.log(`updating the score of the computer ${aiPoints +=1} point`);
        
    }
    
    else if (playerSelection==="rock" && computerSelection==="scissors")
    {
        console.log( "you won! rock beats scissors  ");
        console.log(`updating the score of the player ${playerPoints +=1} point`);
        
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        console.log( "you won! paper beats rock");
        console.log(`updating the score of the player ${playerPoints +=1} point`);
        

    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        console.log( "you lost! scissors beats paper ");
        console.log(`updating the score of the computer ${aiPoints +=1} point`);
        
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        console.log( "you won! scissors beats  paper ");
        console.log(`updating the score of the player ${playerPoints +=1} point`);
        

    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        console.log( "you lost! rock beats scissors  ");
        console.log(`updating the score of the computer ${aiPoints +=1}point`);
       
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
    else if(playerSelection !=="rock","paper","scissors"){ // check for spelling mistakes
        console.log(`error you entered the word ${playerSelection}`);
        console.log("make sure you spelled the word 'rock' 'paper' or 'scissors' correctly");
    }
    return `\nhere's the current score \ncomputer:${aiPoints} pts and player:${playerPoints} pts`;
   
}


//I'll make a function that plays five rounds of the game
//I'll create a function called game() that will have a for loop that calls playRound() 5 times
//the user will also be asked 5 times to chose between rock paper scissors
function game(){  
//this function will allow us to play five rounds of rock paper scissors 
// by prompting the user for an input and by calling playRound() five times inside of a for loop 

for (let i=0;i<5;i++){
    let playerMovePicked=prompt("pick one option between rock,paper or scissors,");
    let playerMovePickedLower=playerMovePicked.toLowerCase();
    console.log("\n");// blank line to separate each rounds
    console.log (playRound(playerMovePickedLower,getComputerChoice()));
    
}

}
game()

//after calling the function gamne() that plays 5 round i'll check to see who had more points
if(aiPoints>playerPoints){
    console.log(`\nthe ai won it has a total of ${aiPoints} pts`);
}
else if (playerPoints>aiPoints){
    console.log(`\nthe player won they have a total of ${playerPoints} pts`);
}
else if (playerPoints===aiPoints){
    console.log(`\nYou both have an equal amount of points the player has ${playerPoints} total pts and the ai has ${aiPoints} total pts `);
}
