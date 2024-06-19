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

console.log(getComputerChoice());
