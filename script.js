// Initialize game scores
let numWin = 0;
let numLose = 0;
let numTie = 0;


function computerPlay() {
/* 
    Have the computer choose "Rock," "Paper," "Scissors."
*/
    const randNum = Math.floor(3 * Math.random()); // Random number from {0, 1, 2}
    let choice;

    switch(randNum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
    }

    return choice;
}

function getRoundResult(playerSelection, computerSelection) {
/*
    Declare a winner for the round
*/

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

function updateScores(result) {
/* 
    Update the score after receiving the result for a round
*/
    if(result === "Win") {
        numWin++;
    } else if(result === "Lose") {
        numLose++;
    } else {
        numTie++;
    }

    const resultDisplay = document.querySelector('.result');
    resultDisplay.textContent = `Number of wins: ${numWin} Number of losses: ${numLose} Number of ties: ${numTie}`;
}

function endGame(playerWon) {
    const resultDisplay = document.querySelector('.result');

    if(playerWon) {
        resultDisplay.textContent += "You Won!";
    } else {
        resultDisplay.textContent += "You Lose!"
    }

    const buttons = document.querySelectorAll('button');
    for(const button of buttons) {
        button.setAttribute('hidden', true);
    }
}

function playRound(playerSelection) {
/*
    Play a round
*/
    computerSelection = computerPlay();

    const result = getRoundResult(playerSelection, computerSelection);
    updateScores(result);
    
    const playerWon = numWin >= 5;
    const computerWon = numLose >= 5;
    if(playerWon || computerWon) {
        endGame(playerWon);
    }
}

/*
    Attach event handlers to play a round
*/
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
