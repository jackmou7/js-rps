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

function playGame() {

    const container = document.querySelector("#container");
    const rock = document.createElement("button");
    rock.textContent = "Rock";
    const paper = document.createElement("button");
    paper.textContent = "Paper";
    const scissor = document.createElement("button");
    scissor.textContent = "Scissor";    

    container.appendChild(rock);    

    container.appendChild(paper);   

    container.appendChild(scissor); 

    let btns = document.querySelectorAll("button");    

    btns.forEach(function(i)  {
        i.addEventListener("click", () => playRound(i.textContent));
    });

    const results = document.querySelector("#results");
    results.textContent = "Results:";


    function playRound(humanChoice, computerChoice = getComputerChoice()) {
        let result;

        if(humanChoice.toLowerCase() == "rock") {
            if(computerChoice == "scissor") {
                result = document.createElement("p");
                result.textContent = "You win! Rock beats paper.";
                results.appendChild(result);
                humanScore++;
            }
            else if(computerChoice == "paper") {
                result = document.createElement("p");
                result.textContent = "You lose! Paper beats rock.";
                results.appendChild(result);
                computerScore++;
            }
            else {
                result = document.createElement("p");
                result.textContent = "It's a tie! Choose again.";
                results.appendChild(result);
            }
        }
        if(humanChoice.toLowerCase() == "paper") {
            if(computerChoice == "rock") {
                result = document.createElement("p");
                result.textContent = "You win! Paper beats rock.";
                results.appendChild(result);
                humanScore++;
            }
            else if(computerChoice == "scissor") {
                result = document.createElement("p");
                result.textContent = "You lose! Scissor beats paper.";
                results.appendChild(result);
                computerScore++;
            }
            else {
                result = document.createElement("p");
                result.textContent = "It's a tie! Choose again.";
                results.appendChild(result);
            }
        }
        if(humanChoice.toLowerCase() == "scissor") {
            if(computerChoice == "paper") {
                result = document.createElement("p");
                result.textContent = "You win! Scissor beats paper.";
                results.appendChild(result);
                humanScore++;
            }
            else if(computerChoice == "rock") {
                result = document.createElement("p");
                result.textContent = "You lose! Rock beats scissor.";
                results.appendChild(result);
                computerScore++;
            }
            else {
                result = document.createElement("p");
                result.textContent = "It's a tie! Choose again.";
                results.appendChild(result);
            }    
        } 
        let humanScoreP = document.createElement("p"); 
        let computerScoreP = document.createElement("p"); 
        humanScoreP.textContent = "Your score: " + humanScore;
        computerScoreP.textContent = "Computer score: " + computerScore;
        results.appendChild(humanScoreP);
        results.appendChild(computerScoreP);
        
        let totalResult = document.createElement("p");
        if(humanScore == 5) {
            totalResult.textContent = ("Congrats! You won!");
            results.appendChild(totalResult);
            humanScore = 0;
            computerScore = 0;
        }
        if(computerScore == 5) {
            totalResult.textContent = ("Aw shucks! You lost!");
            results.appendChild(totalResult);
            humanScore = 0;
            computerScore = 0;
        }
    }    
}

playGame();