// Game text
const gameText = document.querySelector('.textArea .text');
gameText.textContent = "Ready to go!!!";

// Player and computer score
const playerScore = document.querySelector('.pscore');
playerScore.textContent = '0';

const computerScore = document.querySelector('.cscore');
computerScore.textContent = '0';

// Score variables
let playerWins = 0;
let computerWins = 0;
let keepGoing = true;

// Game logic

function buttonPressed(e)
{
    // Checks if someone already won the game
    if(!keepGoing) return;

    // 'this.id' is the playerChoice
    let winner = gameRound(`${this.id}`, getComputerChoice());
    if(winner === "player")
    {
        playerWins++;
    }
    else if(winner === "computer")
    {
        computerWins++;
    }
    playerScore.textContent = `${playerWins}`;
    computerScore.textContent = `${computerWins}`;
    if(playerWins === 5)
    {
        keepGoing = false;
        gameText.textContent = "Player won the game";
    }
    else if(computerWins === 5)
    {
        keepGoing = false;
        gameText.textContent = "Computer won the game";
    }
}

function restartGame()
{
    gameText.textContent = "Ready to go!!!";
    playerScore.textContent = '0';
    computerScore.textContent = '0';

    computerWins = 0;
    playerWins = 0;
}

// Adding event listeners to buttons
const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => button.addEventListener('click', buttonPressed));

const restart = document.querySelector('.restartButton');
restart.addEventListener('click', restartGame);

function getComputerChoice()
{
    // Generates a random number from 0-2
    let randomNumber = (Math.floor(Math.random() * 100) % 3);
    // console.log(randomNumber);

    // Based on random number, return a choice
    switch(randomNumber)
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function gameRound(playerSelection, computerSelection)
{
    // Converting player input to lower case
    playerSelection = playerSelection.toLowerCase();

    // console.log(playerSelection);
    // console.log(computerSelection);

    // Returning a statement based on player and computer selection
    if(playerSelection === "rock")
    {
        if(computerSelection === "rock")
        {   
            gameText.textContent = "It's a tie";
            return "tie";
        }
        else if(computerSelection === "paper")
        {
            gameText.textContent = "You Lose!! Paper beats Rock";
            return "computer";
        }
        else if(computerSelection === "scissors")
        {
            gameText.textContent = "You Win!!! Rock beats Scissors";
            return "player";
        }
    }
    else if(playerSelection === "paper")
    {
        if(computerSelection === "rock")
        {
            gameText.textContent = "You Win!!! Paper beats Rock";
            return "player";
        }
        else if(computerSelection === "paper")
        {
            gameText.textContent = "It's a tie";
            return "tie";
        }
        else if(computerSelection === "scissors")
        {
            gameText.textContent = "You Lose!! Scissors beats Paper";
            return "computer";
        }
    }
    else if(playerSelection === "scissors")
    {
        if(computerSelection === "rock")
        {
            gameText.textContent = "You Lose!! Rock beats Scissors";
            return "computer";
        }
        else if(computerSelection === "paper")
        {
            gameText.textContent = "You Win!!! Scissors beats Paper";
            return "player";
        }
        else if(computerSelection === "scissors")
        {
            gameText.textContent = "It's a tie";
            return "tie";
        }
    }
    else
    {
        return "Please enter a valid input"
    }
}