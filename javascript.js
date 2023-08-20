let counter = 0;
let wins = 0;
let losses = 0;
let ties = 0;

function getComputerChoice() {
    number = Math.floor(Math.random() * 3)
    return (number < 1) ? "Rock" : (number < 2) ? "Paper" : "Scissors"
}



const FinalResult = document.createElement("p"); //Printed out score for round

const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => button.addEventListener("click", () => {
    FinalResult.textContent = ``;
    FinalResult.style.cssText = "font-size: 50px; margin-top : 0;";
    container.appendChild(FinalResult);
    
    playerChoice = button.innerText;

    rpsRound(playerChoice);
    counter++;

    if ((wins == 5 && wins != 0) || (losses == 5 && losses != 0)) { // Best of 5 game
        printResults(); 
    }
    container.appendChild(FinalResult);

    const score = document.querySelector(".score");
    score.textContent = `Wins: ${wins}|| Ties: ${ties} ||Losses ${losses}`;
    score.style.cssText = "font-size: 25px; margin-top : 0;";
}))

const container = document.querySelector("#container");

function printResults(result) {
    if (wins > losses) {
        FinalResult.textContent = `You Win!`;
    } else {
        FinalResult.textContent = `You Lose! Better luck next time`;
    }
    // Reset score
    wins = 0;
    losses = 0;
    ties = 0;
}

function rpsRound(playerSelection) {
    let roundResults = document.querySelector(".outcome");

    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "r" || playerSelection == "rock") {
        playerSelection = "Rock"
    }
    if (playerSelection == "p" || playerSelection == "paper") {
        playerSelection = "Paper"
    }
    if (playerSelection == "s" || playerSelection == "scissors") {
        playerSelection = "Scissors"
    }

    win = false
    lose = false
    tie = false

    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            tie = true
        } else if (computerSelection == "Paper") {
            lose = true
        } else {
            win = true
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Paper") {
            tie = true
        } else if (computerSelection == "Scissors") {
            lose = true
        } else {
            win = true
        }
    } else {
        if (computerSelection == "Scissors") {
            tie = true
        } else if (computerSelection == "Rock") {
            lose = true
        } else {
            win = true
        }
    }
    result = win || lose || tie;

    if (win) {
        roundResults.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        wins++;
    }
    else if (lose) {
        roundResults.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        losses++;
    } else {
        roundResults.textContent = `You Tie! Both you and the computer choose ${computerSelection}`;
        ties++;
    }
}