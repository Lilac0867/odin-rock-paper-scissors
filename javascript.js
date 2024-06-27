let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const num = Math.floor((Math.random() * 100) / 33.3) + 1;
    let ans = "";
    if(num === 1) {
        ans = "rock";
    } else if(num === 2) {
        ans = "paper";
    } else if(num === 3) {
        ans = "scissors";
    }

    return ans;
}

function getHumanChoice() {
    let isTrue = true;
    let ans = "";

    while(isTrue) {
        ans = prompt("Please select rock, paper, or scissors: ").toLowerCase().trim();
        if(ans !== "rock" && ans !== "paper" && ans !== "scissors") {
            console.log(`'${ans}' is not rock, paper, or scissors. Please try again.`);
        } else {
            isTrue = false;
        }
    }

    return ans;
}

function playRound(humanChoice, computerChoice) { // Start here!
    let winner = "You ";
    if(humanChoice === 'rock') {
        if(computerChoice === 'paper') {
            computerScore++;
            winner += "lose! Paper beats Rock.";
        } else if(computerChoice === 'scissors') {
            humanScore++;
            winner += "win! Rock beats Scissors.";
        } else {
            winner += "tie! Both players chose Rock.";
        }
    } else if(humanChoice === 'paper') {
        if(computerChoice === 'scissors') {
            computerScore++;
            winner += "lose! Scissors beat Paper.";
        } else if(computerChoice === 'rock') {
            humanScore++;
            winner += "win! Paper beats Rock.";
        } else {
            winner += "tie! Both players chose Paper.";
        }
    } else {
        if(computerChoice === 'rock') {
            computerScore++;
            winner += "lose! Rock beats Scissors.";
        } else if(computerChoice === 'paper') {
            humanScore++;
            winner += "win! Scissors beat Paper.";
        } else {
            winner += "tie! Both players chose Scissors.";
        }
    }
    return winner;
}

function playGame() {
    let gameWinner = "";
    for(let i = 0; i < 5; i++) {
        alert(playRound(getHumanChoice(), getComputerChoice()));

    }
    if(humanScore > computerScore) {
        gameWinner = "Human wins!";
    } else if(humanScore < computerScore) {
        gameWinner = "Computer wins!";
    } else {
        gameWinner = "Its a tie!";
    }
    return `${gameWinner}\n\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`;
}

alert(playGame());
