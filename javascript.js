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

console.log(getHumanChoice());
