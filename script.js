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


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "rock") {
                    console.log("Tie! Both chose rock!");
                    return "Tie";
                } else if (computerChoice === "paper") {
                    console.log("You lose! Paper beats rock!");
                    return "Loss";
                } else {
                    console.log("You win! Rock beats scissors!");
                    return "Win";
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    console.log("You win! Paper beats rock!");
                    return "Win";
                } else if (computerChoice === "paper") {
                    console.log("Tie! Both chose paper!");
                    return "Tie";
                } else {
                    console.log("You lose! Scissors beats paper!");
                    return "Loss";
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    console.log("You lose! Rock beats scissors!");
                    return "Loss";
                } else if (computerChoice === "paper") {
                    console.log("You win! Scissors beats paper!");
                    return "Win";
                } else {
                    console.log("Tie! Both chose scissors!");
                    return "Tie";
                }
                break;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        let result = playRound(humanSelection, computerSelection);
        if (result === "Win") {
            humanScore++;
        } else if (result == "Loss") {
            computerScore++;
        }
    }

    console.log("Game finished! Your score was " + humanScore + ". The computer's score was " + computerScore);
}

playGame();
