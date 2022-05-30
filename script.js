
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
            result = "Tie";
        } else if(computerSelection === "paper") {
            result = "Lose";
        } else {
            result = "Win";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            result = "Win";
        } else if(computerSelection === "paper") {
            result = "Tie";
        } else {
            result = "Lose";
        }
    } else {
        if(computerSelection === "rock") {
            result = "Lose";
        } else if(computerSelection === "paper") {
            result = "Win";
        } else {
            result = "Tie";
        }
    }

    return result;
}


/*
    Attach event handlers to play a round
*/
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => playRound('rock', computerPlay()));
paperBtn.addEventListener('click', () => playRound('paper', computerPlay()));
scissorsBtn.addEventListener('click', () => playRound('scissors', computerPlay()));


function game() {
/*
    Play a 5 round game.
    For each round
        1. Prompt the player for a choice
        2. Have the computer make its choice
        3. Find who won
        4. Declare winner for the round
        5. Add the round's result to a counter
    After all the rounds are over, declare the winner and final counts of wins, losses, and ties.
*/
    let numWin = 0;
    let numLose = 0;
    let numTie = 0;

    for(let round = 1; round <= 1; round++) {
        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = computerPlay();

        const result = playRound(playerSelection, computerSelection);

        if(result === "Win") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            numWin++;
        } else if(result === "Lose") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            numLose++;
        } else {
            console.log(`It's a tie! ${playerSelection} is tied to ${computerSelection}`);
            numTie++;
        }
    }

    if(numWin > numLose) {
        console.log("You won the game!");
    } else if(numWin < numLose) {
        console.log("You lost the game!");
    } else {
        console.log("The game is tied!");
    }

    console.log(`You won ${numWin} times, tied ${numTie} times, and lost ${numLose}`);
}