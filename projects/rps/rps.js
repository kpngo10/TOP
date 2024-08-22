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
    console.log("Choice Number: " + choiceNum);
    return choice;
}

function getHumanChoice() {
    let choiceHuman = prompt("Please enter your choice: ");
    let choiceLower = choiceHuman.toLowerCase();
    return choiceLower;
}

function capitalize(text) {
    let cap = text[0].toUpperCase();
    let sub = text.substr(1, text.length - 1);
    return (cap + sub);
} 

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if ((humanChoice === "rock") && (computerChoice === "scissor")) {
        console.log("You win! Rock beats scissor.");
        humanScore++;
    } else if ((humanChoice === "scissor") && (computerChoice === "paper")) {
        console.log("You win! Scissor beats paper.");
        humanScore++;
    } else {
        console.log("You lose! " + capitalize(computerChoice) + " beat " + humanChoice + ".");
        computerScore++;
    }
    console.log("Human Choice: " + capitalize(humanChoice) + " / " + "Comp Choice: " + capitalize(computerChoice));
}

function playGame() {
    let humanSelection = getHumanChoice();
    let compSelection = getComputerChoice();

    for (i = 0; i <= 4; i++) {
        playRound(humanSelection, compSelection);
        console.log("Human Score: " + humanScore + " / " + "Computer Score: " + computerScore);
        if (i < 4) {
            humanSelection = getHumanChoice();
            compSelection = getComputerChoice();
        }
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game.");
    } else
        console.log("It's a tie.");

}

playGame();
