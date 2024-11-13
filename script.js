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

function getHumanChoice() {
    let choice = prompt("Let's play rock paper scissors! Enter your choice:");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Tie! Both chose rock!");
            } else if (computerChoice === "paper") {
                console.log("You lose! Paper beats rock!");
            } else {
                console.log("You win! Rock beats scissors!");
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log("You win! Paper beats rock!");
            } else if (computerChoice === "paper") {
                console.log("Tie! Both chose paper!");
            } else {
                console.log("You lose! Scissors beats paper!");
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats scissors!");
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beats paper!");
            } else {
                console.log("Tie! Both chose scissors!");
            }
            break;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);