import { generateRandomNumber, getThrowFromNumber, getWinner } from './utilities.js';

// get DOM elements

const userInput = document.getElementById("user-input");
const computer = document.getElementById("computer-play");
const winner = document.getElementById("winner");
const playaRound = document.getElementById("play-round");
const userScoreBoard = document.getElementById("user-score");
const computerScoreBoard = document.getElementById("computer-score");
const startOver = document.getElementById("start-over");

// initialize DOM state

let userScore = 0;
let computerScore = 0;
let computerPlay;
let userSelection;
let champion;
let selectedRadioButton;

// change DOM state and elements based on game play

const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    userScoreBoard.textContent = userScore;
    computerScoreBoard.textContent = computerScore;
    computer.textContent = '';
    userInput.textContent = '';
    winner.textContent = '';
};

const playRound = () => {
    let randomNumber = generateRandomNumber();
    console.log(randomNumber);
    computerPlay = getThrowFromNumber(randomNumber);
    selectedRadioButton = document.querySelector('input:checked');
    console.log(selectedRadioButton);
    userSelection = selectedRadioButton.value;
    console.log(userSelection);
    champion = getWinner(userSelection, computerPlay);
    updateSpans();  
};

const updateSpans = () => {  
    computer.textContent = ` Computer played ${computerPlay}. `;
    userInput.textContent = `You played ${userSelection}. `;
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
};

// add event listeners
playaRound.addEventListener('click', playRound);
startOver.addEventListener('click', resetGame);
