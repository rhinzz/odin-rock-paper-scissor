function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor"
    }
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let input = prompt("Choose rock, paper, or scissor:");
    if (input == "rock" || input == "paper" || input == "scissor") {
        input = input.toLowerCase();
        return input;
    } else {
        console.log("Invalid input!")
    }

}
//console.log(getHumanChoice());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissor") {
            console.log("You win! Rock beats scissor!");
            humanScore++;
        } else if (humanChoice == "scissor" && computerChoice == "rock") {
            console.log("You lose! Rock beats scissor!");
            computerScore++;
        } else if (humanChoice == "scissor" && computerChoice == "paper") {
            console.log("You win! Scissor beats paper!");
            humanScore++
        } else if (humanChoice == "paper" && computerChoice == "scissor") {
            console.log("You lose! Scissor beats paper!");
            computerScore++;
        } else {
            console.log("Tie!");
            humanScore += 0;
            computerScore += 0;
        }
    }
}
playGame();