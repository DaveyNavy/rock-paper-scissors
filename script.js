function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


let humanScore = 0;
let computerScore = 0;


const result = document.querySelector("#result");
const score = document.querySelector("#score");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const replayButton = document.querySelector("#reset");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
replayButton.addEventListener("click", reset);


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let roundResult;
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                roundResult = "Tie! Both chose rock!";
            } else if (computerChoice === "paper") {
                roundResult = "You lose! Paper beats rock!";
                computerScore++;
            } else {
                roundResult = "You win! Rock beats scissors!";
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                roundResult = "You win! Paper beats rock!";
                humanScore++;
            } else if (computerChoice === "paper") {
                roundResult = "Tie! Both chose paper!";
            } else {
                roundResult = "You lose! Scissors beats paper!";
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                roundResult = "You lose! Rock beats scissors!";
                computerScore++;
            } else if (computerChoice === "paper") {
                roundResult = "You win! Scissors beats paper!";
                humanScore++;
            } else {
                roundResult = "Tie! Both chose scissors!";
            }
            break;
    }
    result.textContent = roundResult;
    score.textContent = "Human score: " + humanScore + "\t Computer Score: " + computerScore;
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            result.textContent = roundResult + " You Win!";
        }
        if (computerScore === 5) {
            result.textContent = roundResult + " You Lose!";
        }
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}