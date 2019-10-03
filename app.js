import { generateRandomNumber, getThrowFromNumber, getWinner } from './utilities.js';

// get DOM elements

const userPlay = document.getElementById("user-play");
const userInput = document.getElementById("user-input");
const computer = document.getElementById("computer-play");
const winner = document.getElementById("winner");
const playaRound = document.getElementById("play-round");
const userScoreBoard = document.getElementById("user-score");
const computerScoreBoard = document.getElementById("computer-score");
const nextRound = document.getElementById("next-round");
const startOver = document.getElementById("start-over");

// initialize DOM state

let userScore = 0;
let computerScore = 0;

const playRound = () => {
    const randomNumber = generateRandomNumber();
    console.log(randomNumber);
    const computerPlay = getThrowFromNumber(randomNumber);
    const selectedRadioButton = document.querySelector('input:checked');
    console.log(selectedRadioButton);
    const userSelection = selectedRadioButton.value;
    console.log(userSelection);

    const champion = getWinner(userSelection, computerPlay)

    // change into separate function: updateSpans()    
    computer.textContent = `Computer played ${computerPlay}. `;
    userInput.textContent = `You played ${userSelection}.`;
    if (champion === 'You'){
        winner.textContent = 'You win this round!';
        userScore++;
        userScoreBoard.textContent = userScore;
    }
    else if (champion === 'Computer'){
        winner.textContent = 'Computer wins this round.';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    }
    else {
        winner.textContent = 'It\'s a Draw.';
    }
    
}

// add event listeners

playaRound.addEventListener('click', playRound);