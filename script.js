const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl =document.getElementById("user-score");
const computerScoreEl =document.getElementById("computer-score");


let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log("User Choice!", button.id, "computer choice!", computerPlay());

        const result = playRound(button.id, computerPlay());
        
        resultEl.textContent = result;
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}

function playRound(playerSelecion, computerSelection) {
    if (playerSelecion === computerSelection) {
        return "It's a tie!";
    }   else if (
        (playerSelecion ==="rock" && computerSelection === "scissors") ||
        (playerSelecion ==="paper" && computerSelection === "rock") ||
        (playerSelecion ==="scissors" && computerSelection === "paper")
    )   {
        playerScore++
        playerScoreEl.textContent = playerScore;
        return "You Win! " + playerSelecion + " beats " + computerSelection;
    }   else {
        computerScore++
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelecion;
    }
}