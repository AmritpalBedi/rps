let counter = 0;
let wins = 0;
let losses = 0;
let ties = 0;

function getComputerChoice() {
    number = Math.floor(Math.random() * 3)
    return (number < 1) ? "Rock" : (number < 2) ? "Paper" : "Scissors"
}

// Player/User's selection
const buttons = document.querySelectorAll(".choice");
const FinalResult = document.createElement("p");
buttons.forEach(button => button.addEventListener("click", () => {
    FinalResult.textContent = ``;
    FinalResult.style.cssText = "font-size: 50px; margin-top : 0;";
    container.appendChild(FinalResult);
    


    playerChoice = button.innerText;

    rpsRound(playerChoice);
    counter++;

    if ((wins == 5 && wins != 0) || (losses == 5 && losses != 0)) {
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
    wins = 0;
    losses = 0;
    ties = 0;
}

function rpsRound(playerSelection) {
    let print = document.querySelector(".outcome");

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
    //winner = 0 // 1 means you win, 2 means you lose (computer wins), and 0 means tie

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
    result = win || lose || tie
    //let print = document.querySelector(".outcome");
    if (win) {
        print.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        //alert(`You win! ${playerSelection} beats ${computerSelection}`)
        wins++;
    }
    else if (lose) {
        print.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        //alert(`You lose! ${computerSelection} beats ${playerSelection}`)
        losses++;
    } else {
        print.textContent = `You Tie! Both you and the computer choose ${computerSelection}`;
        //alert(`You Tie! Both you and the computer choose ${computerSelection}`)
        ties++;
    }
}

// function rpsGame() {
//     winsGame = 0
//     loseGame = 0
//     tiesGame = 0

//     for (let i = 0; i < 5; i++) {
//         result = rpsRound(getPlayerChoice(), getComputerChoice())
//         if (result == 1) {
//             winsGame += 1
//         } else if (result == 2) {
//             loseGame += 1
//         } else {
//             tiesGame += 1
//         }
//     }

//     if (winsGame > loseGame) {
//         alert(`You win with a score of ${winsGame} to ${loseGame}`)
//     } else if (loseGame > winsGame) {
//         alert(`Computer wins with a score of ${loseGame} to ${winsGame}`)
//     } else {
//         alert(`It's a tie with ${winsGame} wins, ${loseGame} losses and ${tiesGame} ties`)
//     }
//     console.log("Wins " + winsGame)
//     console.log("Losses " + loseGame)
//     console.log("Ties " + tiesGame)
// }

// rpsGame()

