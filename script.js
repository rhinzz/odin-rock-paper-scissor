let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let playerSelection = button.value;
        let computerChoice = getComputerChoice();

        playRound(playerSelection, computerChoice);
    });
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
    const result = document.querySelector("#result");

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
        const win = document.createElement("p");

        if (humanScore == 5) {
            win.innerHTML = "You win!";
        } else {
            win.innerHTML = "You lose!";
        }

        document.querySelector("#resultContainer").appendChild(win);
    }
}