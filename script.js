console.log("Hello World!");
// get computer choice by random numbers from 1 to 3
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3) + 1;
    switch (ranNum) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}
//Get human choice by let user types into prompt
function getHumanChoice() {
    let userType = prompt("What's your move?", "");
    userType = userType.toLowerCase();
    switch (userType) {
        case "rock":
            console.log("You: Rock");
            return "Rock";
            break;
        case "paper":
            console.log("You: Paper");
            return "Paper";
            break;
        case "scissors":
            console.log("You: Scissors");
            return "Scissors";
            break;
        default:
            alert("Please enter it right!!!!");
            console.log("You enter undefined value.");
            break;
};
}
//Initial score
let humanScore = 0;
let computerScore = 0;

//Determine who win/lose and scores for each round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else {
        console.log("Nobody win.")
    };
}

//A game of 5 rounds
function playGame() {
//Play 5 rounds
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Computer: ` + computerSelection);
    playRound(humanSelection, computerSelection);
}
//Afterward score
console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
//Determine winner for the whole game
if (humanScore > computerScore) {
    console.log('You won the game!');
} else {
    console.log('Computer won the game! You lose =(');
}
}

playGame();