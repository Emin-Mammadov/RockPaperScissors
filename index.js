let choices=['rock','paper','scissors'];
let yourScore=0;
let computerScore=0;

function getComputerChoice(){
    let randomchoice=Math.floor(Math.random() * 3);
    return choices[randomchoice];
}

function playRound(playerSelection, computerSelection) {
    if ((computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') 
    || (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') 
    || (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper')){
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;}
    else if ((computerSelection == 'scissors' && playerSelection.toLowerCase() == 'rock')
        || (computerSelection == 'rock' && playerSelection.toLowerCase() == 'paper')
        || (computerSelection == 'paper' && playerSelection.toLowerCase() == 'scissors')){
        yourScore++;
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;}
    else (computerSelection == playerSelection.toLowerCase())
        return `Draw!`;
}

function game(){
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Choose your item: ');
        console.log(playRound(playerSelection,computerSelection));
    }
    if (yourScore > computerScore) return `Congratulations, you won the game! Your score: ${yourScore} Computer's score: ${computerScore}`;
    else if (yourScore < computerScore) return `Unfortunately, you lost the game! Your score: ${yourScore} Computer's score: ${computerScore}`;
    else return `Game ends with a Draw! Your score: ${yourScore} Computer's score: ${computerScore}`;
}

console.log(game())


