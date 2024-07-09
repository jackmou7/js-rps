/*
Pseudocode:
    Overarching Program: Create a JS program that takes in user input to play rock paper scissors against a computer/the console that randomly
    chooses rock paper or scissor.
    1. Write a function that gets random choice of option using Math.random.
    2. Get the user input through the console.
    3. Print out / log who the winner is.
*/

humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    let choice;
    if (random == 0) {
        choice = "rock";
    }
    else if(random == 1) {
        choice = "paper";
    }
    else {
        choice = "scissor";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissor?");
    return choice;
}

function playGame() {

    function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
        if(humanChoice.toLowerCase() == "rock") {
            if(computerChoice == "scissor") {
                console.log("You win! Rock beats paper.");
                humanScore++;
            }
            else if(computerChoice == "paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            }
            else {
                console.log("It's a tie! Choose again.");
            }
        }
        if(humanChoice.toLowerCase() == "paper") {
            if(computerChoice == "rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
            }
            else if(computerChoice == "scissor") {
                console.log("You lose! Scissor beats paper.");
                computerScore++;
            }
            else {
                console.log("It's a tie! Choose again.");
            }
        }
        if(humanChoice.toLowerCase() == "scissor") {
            if(computerChoice == "paper") {
                console.log("You win! Scissor beats paper.");
                humanScore++;
            }
            else if(computerChoice == "rock") {
                console.log("You lose! Rock beats scissor.");
                computerScore++;
            }
            else {
                console.log("It's a tie! Choose again.");
            }    
        } 
    }

    while(humanScore != 5 && computerScore != 5) {
        playRound();
    }

    if(humanScore == 5) {
        console.log("Congrats! You won!");
    }
    else {
        console.log("Aw shucks! You lost!");
    }


}
    
playGame();