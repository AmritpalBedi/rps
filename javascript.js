function getComputerChoice() {
    number = Math.floor(Math.random() * 3)
    return (number < 1) ? "Rock" : (number < 2) ? "Paper" : "Scissors"
}

function getPlayerChoice() {
    pew = prompt("Choose your move! (R)ock, (P)aper, (S)cissors, or (Q)uit: ")
    return pew
}

function rpsRound(playerSelection, computerSelection) {
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
    winner = 0 // 1 means you win, 2 means you lose (computer wins), and 0 means tie

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
    if (win) {
        alert(`You win! ${playerSelection} beats ${computerSelection}`)
        winner = 1
    }
    else if (lose) {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`)
        winner = 2
    } else {
        alert(`You Tie! Both you and the computer choose ${computerSelection}`)
    }
    return winner
}

function rpsGame() {
    winsGame = 0
    loseGame = 0
    tiesGame = 0

    for (let i = 0; i < 5; i++) {
        result = rpsRound(getPlayerChoice(), getComputerChoice())
        if (result == 1) {
            winsGame += 1
        } else if (result == 2) {
            loseGame += 1
        } else {
            tiesGame += 1
        }
        console.log("Wins " + winsGame)
        console.log("Losses " + loseGame)
        console.log("Ties " + tiesGame)
    }

    if (winsGame > loseGame) {
        console.log(`You win with a score of ${winsGame} to ${loseGame}`)
    } else if (loseGame > winsGame) {
        console.log(`Computer wins with a score of ${loseGame} to ${winsGame}`)
    } else {
        console.log(`It's a tie with ${winsGame} wins, ${loseGame} losses and ${tiesGame} ties`)
    }
}

rpsGame()