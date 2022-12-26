console.log("Ready to go!!!");

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

    // Returning a statement based on player and compter selection
    if(playerSelection === "rock")
    {
        if(computerSelection === "rock")
        {   
            console.log("It's a tie");
            return "tie";
        }
        else if(computerSelection === "paper")
        {
            console.log("You Lose!! Paper beats Rock");
            return "computer";
        }
        else if(computerSelection === "scissors")
        {
            console.log("You Win!!! Rock beats Scissors");
            return "player";
        }
    }
    else if(playerSelection === "paper")
    {
        if(computerSelection === "rock")
        {
            console.log("You Win!!! Paper beats Rock");
            return "player";
        }
        else if(computerSelection === "paper")
        {
            console.log("It's a tie");
            return "tie";
        }
        else if(computerSelection === "scissors")
        {
            console.log("You Lose!! Scissors beats Paper");
            return "computer";
        }
    }
    else if(playerSelection === "scissors")
    {
        if(computerSelection === "rock")
        {
            console.log("You Lose!! Rock beats Scissors");
            return "computer";
        }
        else if(computerSelection === "paper")
        {
            console.log("You Win!!! Scissors beats Paper");
            return "player";
        }
        else if(computerSelection === "scissors")
        {
            console.log("It's a tie");
            return "tie";
        }
    }
    else
    {
        return "Please enter a valid input"
    }
}

function game()
{
    let playerWins = 0;
    let computerWins = 0;

    let keepGoing = true;

    while(keepGoing)
    {
        // Getting player input
        let playerSelection = prompt("Make a choice");
        if(playerSelection === null)
        {
            keepGoing = false;
            return "Game ended by Player"
        }
        
        let computerSelection = getComputerChoice();

        // Calling game round function and storing the winner
        let winner = gameRound(playerSelection, computerSelection);

        // Increasing the wins based on the winner
        if(winner === "player")
        {
            playerWins++;
        }
        else if(winner === "computer")
        {
            computerWins++;
        }

        // console.log(winner);
        // console.log(playerWins);
        // console.log(computerWins);
        console.log("Player: " + playerWins + " Computer: " + computerWins);

        // End the loop if one of the two wins
        if(playerWins === 5)
        {
            keepGoing = false;

            // easter egg
            let message = prompt("Please leave a message for your opponent")
            return `Player wins the game...
                "${message}" - Player (2022)`;
        }
        if(computerWins === 5)
        {
            keepGoing = false;
            return "Good Afternoon Player!!! Computer wins the game"
        }
    }
}