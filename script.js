let humanScore = 0;
let computerScore = 0;
const result = document.querySelector("#result");
const win = document.createElement("p");


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let playerSelection = button.value;
        let computerChoice = getComputerChoice();

        playRound(playerSelection, computerChoice);
    });
})

const restartGame = document.querySelector("#restart");
restartGame.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;

    document.querySelector('#human').innerText = `0`;
    document.querySelector('#computer').innerText = `0`;
    result.innerText = "";
    win.remove();

    buttons.forEach(button => button.disabled = false);

    document.querySelector("#restartButton").remove();
})

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
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        result.innerText = "You lose! Paper beats rock!";
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        result.innerText = "You win! Rock beats scissor!";
        humanScore++;
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        result.innerText = "You lose! Rock beats scissor!";
        computerScore++;
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        result.innerText = "You win! Scissor beats paper!";
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        result.innerText = "You lose! Scissor beats paper!";
        computerScore++;
    } else {
        result.innerText = "Tie!";
    }

    document.querySelector('#human').innerText = `${humanScore}`;
    document.querySelector('#computer').innerText = `${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        buttons.forEach(button => button.disabled = true);
        const restart = document.createElement("button");
        restart.setAttribute("id", "restartButton");
        restart.innerText = "Restart";

        if (humanScore == 5) {
            win.innerHTML = "You win!";
        } else {
            win.innerHTML = "You lose!";
        }

        document.querySelector("#resultContainer").appendChild(win);
        document.querySelector("#restart").appendChild(restart);
    }
}