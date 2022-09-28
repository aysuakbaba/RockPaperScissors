let computerScore = 0;
let playerScore = 0;
let roundWinner = "";



function oneRound(playSelect , computerSelection){
    if(playSelect == computerSelection){
        roundWinner = "tie";
    }else if((playSelect=== "rock" && computerSelection=== "paper")||(playSelect==="scissors" && computerSelection==="rock")||(playSelect=== "paper" && computerSelection==="scissors")){
        computerScore +=1;
        roundWinner="computer";
    }else if((playSelect=== "paper" && computerSelection=== "rock")||(playSelect=== "scissors" && computerSelection==="paper")||(playSelect==="rock" && computerSelection==="scissors")){
        playerScore +=1;
        roundWinner= "player";
    }
    updateScoreMessage(roundWinner, playSelect,computerSelection);

}

const mylist = ["rock" , "paper" , "scissors"];
function getComputerChoice(){
    return mylist[~~(Math.random() * mylist.length)];
}

function isGameOver(){
    return playerScore === 5 || computerScore===5;
}

const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const playerSign = document.getElementById("playerSign");
const playerScorePara = document.getElementById("playerScore");
const computerSign = document.getElementById("computerSign");
const computerScorePara = document.getElementById("computerScore");
const rockBut = document.getElementById("rock-btn");
const paperBut =document.getElementById("paper-btn");
const scissorsBut = document.getElementById("scissors-btn");
const reset = document.getElementById("reset");
const play = document.getElementById("play");
const computerSelection = getComputerChoice();

rockBut.addEventListener("click", () => handleClick("rock"));
paperBut.addEventListener("click", () => handleClick("paper"));
scissorsBut.addEventListener("click", () => handleClick("scissors"));
reset.addEventListener("click", restartGame);

function handleClick(playSelect){
    if(isGameOver()){
        scoreInfo.textContent = "GAME OVER";
        return;
    }
    const computerSelection = getComputerChoice();
    oneRound(playSelect,computerSelection);
    updateChoices(playSelect, computerSelection);
    updateScore();

    if(isGameOver()){
        scoreInfo.textContent = "GAME OVER";
        return;

    }

}

function updateChoices(playSelect,computerSelection){
    if(playSelect === "rock"){
        playerSign.textContent = "✊";
    }else if(playSelect === "paper"){
        playerSign.textContent = "✋";
    }else if(playSelect==="scissors"){
        playerSign.textContent="✌";
    }

    if(computerSelection==="rock"){
        computerSign.textContent ="✊";
    }else if(computerSelection==="paper"){
        computerSign.textContent="✋";
    }else if(computerSelection ==="scissors"){
        computerSign.textContent ="✌";
    }
}

function updateScore(){
    if(roundWinner==="tie"){
        scoreInfo.textContent ="It's a tie!";
    }else if(roundWinner==="player"){
        scoreInfo.textContent="You won!";
    }else if(roundWinner==="computer"){
        scoreInfo.textContent="You lost!";
    }
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent =`Computer: ${computerScore}`;

}

function updateScoreMessage(winner, playSelect,computerSelection){
    if(winner ==="player"){
        scoreMessage.textContent = `${capitalizeFirstLetter(playSelect)} beats ${computerSelection.toLowerCase()}`;
        return;
    }
    if(winner ==="computer"){
        scoreMessage.textContent = `${capitalizeFirstLetter(playSelect)} is beaten by ${computerSelection.toLowerCase()}`
        return;

    }
    scoreMessage.textContent = `${capitalizeFirstLetter(playSelect)} ties with ${computerSelection.toLowerCase()}`
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function restartGame(){
    playerScore=0;
    computerScore=0;
    scoreInfo.textContent="Choose your weapon";
    scoreMessage.textContent="First to score 5 points wins the game";
    playerScorePara.textContent= "Player: 0";
    computerScorePara.textContent="Computer: 0";
    playerSign.textContent="❔";
    computerSign.textContent="❔";
}



