// making a simple rock-paper-scissors game

//1)first function getComputerChoice() will return rock paper or scissor
//we will pass this function as 2nd argument of firstRound()

function getComputerChoice(){
    //gets a random word from the array and return it with a string saying I picked rock paper or scissors this time
    let MoveSet =["rock","paper","scissors"];
    let aiMovePicked=MoveSet[Math.floor(Math.random()*MoveSet.length)]; //get a random word from the array MoveSet

    return  aiMovePicked;
}


// first ill create a variable that asks the user via prompt to choose: rock, paper or scissors
let playerMovePicked=prompt("pick one option between rock,paper or scissors,")
let playerMovePickedLower=playerMovePicked.toLowerCase() // makes the user input lower case


// 2) now we create a function to play a single round of the game, it will take 2 parameters
function firstRound(playerselection,computerselection) {
    //displays what the player and the computer picked,compares them and returns a string saying you won or lost
    console.log(`the player has chosen ${playerselection}`);
    console.log(`the computer has chosen ${computerselection}`);
    
    if(playerselection==="rock" && computerselection==="paper"){
        return "you lost! paper beats rock";
    }
    
    else if (playerselection==="rock" && computerselection==="scissors")
    {
        return "you won! rock beats scissors  ";
    }
    else if (playerselection==="paper" && computerselection==="rock"){
        return "you won! paper beats rock";

    }
    else if (playerselection==="paper" && computerselection==="scissors"){
        return "you lost! scissors beats  paper ";

    }
    else if (playerselection==="scissors" && computerselection==="paper"){
        return "you won! scissors beats  paper ";

    }
    else if (playerselection==="scissors" && computerselection==="rock"){
        return "you lost! rock beats scissors  ";

    }
    else if (playerselection==="scissors" && computerselection==="scissors"){
        return "Tie game! you both picked scissors ";

    }
    else if (playerselection==="paper" && computerselection==="paper"){
        return "Tie game! you both picked paper";

    }
    else if (playerselection==="rock" && computerselection==="rock"){
        return "Tie game! you both picked rock ";

    }
    
}
//for the first parameter ill pass in the variable playerMovePickedLower as 1st argument
// for the second parameter I'll pass in the function getComputerChoice as 2nd argument
console.log(firstRound(playerMovePickedLower,getComputerChoice()))