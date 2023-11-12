const buttons = document.querySelectorAll("button");

 resultE1 = document.getElementById("result");

 const playerScoreE1 = document.getElementById("user-score")

 const computerScoreE1 = document.getElementById("computer-score")


 let playerScore = 0;
 let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
       const result = playRound(button.id,computerPlay());
       resultE1.textContent = result;
       
    });
});

function computerPlay() {
    const choices = ["rock", "paper","scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound (playerSelection, computerSelection){
    if(playerSelection === computerSelection) {
        return "It's a tie!";
    } else if(
        (playerSelection ==="rock" && computerSelection === "scissor") ||
        (playerSelection ==="paper" && computerSelection === "rock") ||
        (playerSelection ==="scissor" && computerSelection === "paper") 
    ) {
        playerScore++;

        playerScoreE1.textContent = playerScore


        return "You win!" + playerSelection + " beats" + computerSelection;
    } else {
        computerScore++;
        computerScoreE1.textContent = playerScore
        return "You Lose!" + computerSelection + "beats" + playerSelection;
    }
    
}