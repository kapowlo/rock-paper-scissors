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
    console.log(`\nthe player has chosen ${playerSelection}`);
    console.log(`the computer has chosen ${computerSelection}`);
    
    if(playerSelection==="rock" && computerSelection==="paper"){
     textPara.textContent= "you lost! paper beats rock "; // put this console is func aiscore or playerscore
      updateScorePara.textContent=`updating the score of the computer ${aiPoints +=1} point`;
        
    }
    
    else if (playerSelection==="rock" && computerSelection==="scissors")
    {
      textPara.textContent= "you won! rock beats scissors  ";
       updateScorePara.textContent=`updating the score of the player ${playerPoints +=1} point`;
        
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
      textPara.textContent= "you won! paper beats rock ";
       updateScorePara.textContent=`updating the score of the player ${playerPoints +=1} point`;
        

    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
       textPara.textContent= "you lost! scissors beats paper ";
        updateScorePara.textContent =`updating the score of the computer ${aiPoints +=1} point`;
        
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
       textPara.textContent= "you won! scissors beats  paper ";
        updateScorePara.textContent=`updating the score of the player ${playerPoints +=1} point`;
        

    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
       textPara.textContent= "you lost! rock beats scissors  ";
        updateScorePara.textContent=`updating the score of the computer ${aiPoints +=1} point`;
       
    }
    else if (playerSelection==="scissors" && computerSelection==="scissors"){
    textPara.textContent= "Tie game! you both picked scissors ";
    updateScorePara.textContent="no updates to the score";    
    }
    else if (playerSelection==="paper" && computerSelection==="paper"){
     textPara.textContent= "Tie game! you both picked paper";
     updateScorePara.textContent="no updates to the score";  

    }
    else if (playerSelection==="rock" && computerSelection==="rock"){
     textPara.textContent= "Tie game! you both picked rock ";
     updateScorePara.textContent="no updates to the score";   

    }
    
    return`The current score \ncomputer:${aiPoints} pts and player:${playerPoints} pts`;
   
}



// create a div, inside this div I will have three buttons
const div = document.createElement("div");

const textPara = document.createElement("p"); // this will hold the text that says who won the current round 

const updateScorePara = document.createElement("p");// this will update the score every round 

const winnerPara = document.createElement("p");// show the final winner

// append these elements to the body
document.body.append(div,textPara,updateScorePara,winnerPara);

// create some button for rock paper and scissors and add text to each of them
const rockBtn = document.createElement("button");
rockBtn.textContent ="Select rock";

const paperBtn = document.createElement("button");
paperBtn.textContent="Select Paper";

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent="Select scissors";

// add each button to the div used append to add multiple at once.
div.append(rockBtn,paperBtn,scissorsBtn);

// when user clicks on any of these buttons call function to play round 
//the 1st arg is the player's choice based on which button they clicked
// we play no more than 5 rounds, counter variable will count how many times the buttons we're clicked
//at 5 clicks delete the buttons and declare the winner!
let counter=0;
rockBtn.addEventListener("click",()=>{
        counter++;
        console.log(playRound("rock",getComputerChoice()));
        if(counter==5){
           div.remove(rockBtn,paperBtn,scissorsBtn);
            //call check score func at the end
            checkScore();
            
        } 
})
paperBtn.addEventListener("click",()=>{
        counter++;
        console.log(playRound("paper",getComputerChoice()));
        if(counter==5){
           div.remove(rockBtn,paperBtn,scissorsBtn);
             //call check score func at the end
             checkScore();
        } 
})
scissorsBtn.addEventListener("click",()=>{
        counter++;
        console.log(playRound("scissors",getComputerChoice()));
        if(counter==5){
           div.remove(rockBtn,paperBtn,scissorsBtn);
             //call check score func at the end
             checkScore();
        } 
})



//call this function after 5 rounds 
function checkScore(){
    if(aiPoints>playerPoints){
        winnerPara.textContent=`\nThe ai won it has accumulated a total of ${aiPoints} pts`;
        winnerPara.style.color="darkblue";
        winnerPara.style.fontSize="24px";
        winnerPara.style.border="3px dashed rgb(70,130,180)"
       
    }
    else if (playerPoints>aiPoints){
        winnerPara.textContent=`\nYou won you have accumulated a total of ${playerPoints} pts`;
        winnerPara.style.color ="green"
        winnerPara.style.fontSize="24px";
        winnerPara.style.border="3px dashed rgb(46,139,87)"
       
    }
    else{
        winnerPara.textContent=`\n it's a tie player:${playerPoints} pts computer:${aiPoints} pts`
        winnerPara.style.color ="brown"
        winnerPara.style.fontSize="24px";
        winnerPara.style.border="3px dashed rgb(0,0,0)"
       
    }
}


