let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let userChoice = button.value;
        let computerChoice = getComputerChoice();
        //console.log("Human: " + userChoice);
        //console.log("Bot: "+ computerChoice);
        playRound(userChoice, computerChoice);        
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
    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock!");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock!");
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        console.log("You win! Rock beats scissor!");
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissor!");
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        console.log("You win! Scissor beats paper!");
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        console.log("You lose! Scissor beats paper!");
    } else {
        console.log("Tie!");
    }
}