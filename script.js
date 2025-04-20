let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let playerSelection = button.value;
        let computerChoice = getComputerChoice();
        playRound(playerSelection, computerChoice);        
    });
})

const resultContainer = document.querySelector("#resultContainer");
const result = document.querySelector("#result");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == "paper" && computerChoice == "rock") {
        result.innerText = "You win! Paper beats rock!";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        result.innerText = "You lose! Paper beats rock!";
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        result.innerText = "You win! Rock beats scissor!";
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        result.innerText = "You lose! Rock beats scissor!";
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        result.innerText = "You win! Scissor beats paper!";
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        result.innerText = "You lose! Scissor beats paper!";
    } else {
        result.innerText = "Tie!";
    }
}