
function computerPlay() {
/* 
    Have the computer choose "Rock," "Paper," "Scissors."
*/
    const randNum = Math.floor(3 * Math.random()); // Random number from {0, 1, 2}
    let choice;

    switch(randNum) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
/*
    Declare a winner for the round
*/
    playerSelection = playerSelection.toLowerCase(); // Make user choice case-insensitive
    computerSelection = computerSelection.toLowerCase();
    let result;
    
    if(playerSelection === "rock") {
        if(computerSelection === "rock") {
            result = "It's a tie! Rock is tied to rock";
        } else if(computerSelection === "paper") {
            result = "You lose! Paper beats rock";
        } else {
            result = "You won! Rock beats scissors";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            result = "You won! Paper beats rock";
        } else if(computerChoice === "paper") {
            result = "It's a tie! Paper is tied to paper";
        } else {
            result = "You lose! Scissors beat paper";
        }
    } else {
        if(computerSelection === "rock") {
            result = "You lose! Rock beats scissors";
        } else if(computerSelection === "paper") {
            result = "You won! Scissors beat paper";
        } else {
            result = "It's a tie! Scissors are tied to scissors";
        }
    }

    return result;
}
