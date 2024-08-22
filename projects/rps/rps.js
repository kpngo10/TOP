let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 100);
    let choice;
    if (choiceNum < 33) {
        choice = "rock";
    } else if ((33 < choiceNum) && (choiceNum < 66)) {
        choice = "paper";
    } else {
        choice = "scissor";
    }
    console.log(`Computer Choice: ${choice}`);
    return choice;
}

function capitalize(text) {
    let cap = text[0].toUpperCase();
    let sub = text.substr(1, text.length - 1);
    return (cap + sub);
}

function playRound(humanChoice, computerChoice) {
    const progress = document.createElement("p");
    if (humanChoice === computerChoice) {
        progress.textContent = "It's a tie!";
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        progress.textContent = "You win! Paper beats rock.";
        humanScore++;
    } else if ((humanChoice === "rock") && (computerChoice === "scissor")) {
        progress.textContent = "You win! Rock beats scissor.";
        humanScore++;
    } else if ((humanChoice === "scissor") && (computerChoice === "paper")) {
        progress.textContent = "You win! Scissor beats paper.";
        humanScore++;
    } else {
        progress.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
        computerScore++;
    }
    progress.textContent = `Human Choice: ${capitalize(humanChoice)} | Computer Choice: ${capitalize(computerChoice)}`;
    menu.appendChild(progress);
}

function displayResults(humanScore, computerScore) {
    const final = document.createElement("p");
    results.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    if (humanScore == 5) {
        final.textContent = "You win the game!";
    }
    if (computerScore == 5) {
        final.textContent = "You lost the game.";
    }
    menu.appendChild(results);
    menu.appendChild(final);
    humanScore = 0;
    computerScore = 0;
}

const menu = document.querySelector("#menu");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");
const results = document.createElement("div");

rockBtn.textContent = "rock";
paperBtn.textContent = "paper";
scissorBtn.textContent = "scissor";

menu.appendChild(rockBtn);
menu.appendChild(paperBtn);
menu.appendChild(scissorBtn);

menu.addEventListener("click", (e) => {
    let choice = e.target;
    let humanSelection = "";
    let compSelection = getComputerChoice();

    switch (choice) {
        case rockBtn:
            humanSelection = rockBtn.textContent;
            console.log(`Human Choice: ${humanSelection}`);
            break;
        case paperBtn:
            humanSelection = paperBtn.textContent;
            console.log(`Human Choice: ${humanSelection}`);
            break;
        case scissorBtn:
            humanSelection = scissorBtn.textContent;
            console.log(`Human Choice: ${humanSelection}`);
            break;
    }
    playRound(humanSelection, compSelection);
    displayResults(humanScore, computerScore);
});
