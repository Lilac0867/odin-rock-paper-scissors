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

function playRound(humanChoice, computerChoice) {
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
    const results = document.querySelector('.results'); // Need to remove children as more are added
    const content = document.createElement('div');
    
    const result_para = document.createElement('p');
    result_para.textContent = winner;
    content.appendChild(result_para);

    const score = document.createElement('p');
    score.textContent = `Player Score: ${humanScore}\nComputer Score: ${computerScore}`;
    content.appendChild(score);

    results.appendChild(content);
}

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    let playerChoice = e.target.className;
    
    switch(playerChoice) {
        case 'rock':
            console.log(playRound(playerChoice, getComputerChoice()));
            break;
        case 'paper':
            console.log(playRound(playerChoice, getComputerChoice()));
            break;
        case 'scissors':
            console.log(playRound(playerChoice, getComputerChoice()));
            break;
    }
});
