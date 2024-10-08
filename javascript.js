let playerScore = 0;
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
            playerScore++;
            winner += "win! Rock beats Scissors.";
        } else {
            winner += "tie! Both players chose Rock.";
        }
    } else if(humanChoice === 'paper') {
        if(computerChoice === 'scissors') {
            computerScore++;
            winner += "lose! Scissors beat Paper.";
        } else if(computerChoice === 'rock') {
            playerScore++;
            winner += "win! Paper beats Rock.";
        } else {
            winner += "tie! Both players chose Paper.";
        }
    } else {
        if(computerChoice === 'rock') {
            computerScore++;
            winner += "lose! Rock beats Scissors.";
        } else if(computerChoice === 'paper') {
            playerScore++;
            winner += "win! Scissors beat Paper.";
        } else {
            winner += "tie! Both players chose Scissors.";
        }
    }
    const results = document.querySelector('.results');

    if(results.firstChild) {
        results.removeChild(document.getElementById('content'));
    }
    
    const content = document.createElement('div');
    content.id = 'content';
    const resultPara = document.createElement('p');
    resultPara.id = 'result_para'
    resultPara.textContent = winner;
    content.appendChild(resultPara);

    const score = document.createElement('p');
    score.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
    content.appendChild(score);

    results.appendChild(content);
}

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    let playerChoice = e.target.id;
    
    switch(playerChoice) {
        case 'rock':
            playRound(playerChoice, getComputerChoice());
            break;
        case 'paper':
            playRound(playerChoice, getComputerChoice());
            break;
        case 'scissors':
            playRound(playerChoice, getComputerChoice());
            break;
    }
    
    if(playerScore >= 5 || computerScore >= 5) {
        buttons.removeChild(document.getElementById('rock'));
        buttons.removeChild(document.getElementById('paper'));
        buttons.removeChild(document.getElementById('scissors'));

        const content = document.querySelector('#content');
        content.removeChild(document.getElementById('result_para'));

        let winner = (playerScore > computerScore) ? 'Player' : 'Computer';

        const gameResults = document.querySelector('.game_results');
        const winnerPara = document.createElement('p');
        winnerPara.textContent = `${winner} wins!`;
        gameResults.appendChild(winnerPara);
    }

});
