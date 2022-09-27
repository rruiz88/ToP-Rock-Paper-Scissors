
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let round = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const outerDiv = document.querySelector('.outer');
const buttons = document.querySelector('.buttons');

rock.addEventListener("click", () => {
    playerSelection = "rock";
    game();
    console.log("rock clicked");
});


paper.addEventListener("click", () =>{
    playerSelection = "paper";
    game();
    console.log("paper clicked");
});

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    game();
    console.log("scissors clicked");
});

const results = document.querySelector('.results');


const btnRestart = document.querySelector('#btnRestart');
btnRestart.onclick = () => history.go(0);

function getComputerChoice() {
    let pick = Math.floor(Math.random() * 3);

            if (pick === 0) {
                return "rock";
            } else if (pick === 1) {
                return "paper";
            } else if (pick === 2) {
                return "scissors";
            }
}



function playRound(playerSelection, computerSelection) {

    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") ||  (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You Win!";
        } else if (playerSelection === computerSelection) {
        return "It's a tie!";
        } else {
        return "You Lose!";
        }

}

function game(){
    round++;
    computerSelection = getComputerChoice();
    if (playRound(playerSelection, computerSelection) === "You Win!") {
        playerScore++;
    } else if (playRound(playerSelection, computerSelection) === "You Lose!") {
        computerScore++;
    }

    const throws = document.querySelector(".throws")
            throws.textContent = `Round ${round}! Player throws ${playerSelection}!
            Computer throws ${computerSelection}!`

            const whoWins = document.querySelector(".whoWins");
            whoWins.textContent = `${playRound(playerSelection, computerSelection)}`;

            const score = document.querySelector(".score");
            score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

            const gameOver = document.querySelector(".gameOver");
            gameOver.textContent = `${winner(playerScore, computerScore)}`;
}


function winner(playerScore, computerScore) { 
    if (playerScore === 5) {
        outerDiv.removeChild(buttons);
        return "Player wins!"
    } else if (computerScore === 5) {
        outerDiv.removeChild(buttons);
        return "Computer wins!"
    } else {
        return "Next round!"
    }

}

