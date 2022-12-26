console.log("Ready to go!!!");

function getComputerChoice()
{
    // Generates a random number from 0-2
    let randomNumber = (Math.floor(Math.random() * 100) % 3);
    console.log(randomNumber);

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

    // Returning a statement based on player and compter selection
    if(playerSelection === "rock")
    {
        if(computerSelection === "rock")
        {
            return "It's a tie";
        }
        else if(computerSelection === "paper")
        {
            return "You Lose!! Paper beats Rock";
        }
        else if(computerSelection === "scissors")
        {
            return "You Win!!! Rock beats Scissors";
        }
    }
    else if(playerSelection === "paper")
    {
        if(computerSelection === "rock")
        {
            return "You Win!!! Paper beats Rock";
        }
        else if(computerSelection === "paper")
        {
            return "It's a tie";
        }
        else if(computerSelection === "scissors")
        {
            return "You Lose!! Scissors beats Paper";
        }
    }
    else if(playerSelection === "scissors")
    {
        if(computerSelection === "rock")
        {
            return "You Lose!! Rock beats Scissors";
        }
        else if(computerSelection === "paper")
        {
            return "You Win!!! Scissors beats Paper";
        }
        else if(computerSelection === "scissors")
        {
            return "It's a tie";
        }
    }
    else
    {
        return "Please enter a valid input"
    }
}

console.log(gameRound("Rock", getComputerChoice()))