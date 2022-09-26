let arr = ["Rock", "Paper", "Scissors"];
let choice;

function getComputerChoice() {
    let option = Math.floor(Math.random() * arr.length);
    choice = arr[option];
    return choice;
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

computerSelection.toLowerCase;    

if(playerSelection === computerSelection) {
    return "Tie!";
} else if (playerSelection === "rock") {
    if(computerSelection === "paper") {
        return "You Lose! Paper covers Rock."
    } else {
        return "You Win! Rock crushes Scissors."
    }
} else if (playerSelection === "scissors") {
    if(computerSelection === "rock") {
        return "You Lose! Rock crushes Scissors."
    } else {
        return "You Win! Scissors cuts Paper."
    }
} else if (playerSelection === "paper") {
    if(computerSelection === "scissors") {
        return "You Lose! Scissors cuts Paper."
    } else {
        return "You Win! Paper covers Rock."
    }
}

}

const playerSelection = "paper";
const computerSelection = getComputerChoice().toLowerCase;
console.log(playRound(playerSelection, computerSelection));