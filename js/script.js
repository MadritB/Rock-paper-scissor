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
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
}