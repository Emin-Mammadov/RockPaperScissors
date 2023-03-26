let choices=['rock','paper','scissors'];
let yourScore=0;
let computerScore=0;

function getComputerChoice(){
    let randomchoice=Math.floor(Math.random() * 3);
    return choices[randomchoice];
}

function playRound(selection) {
    const computerSelection = getComputerChoice();
    const playerSelection = selection;
    const score = document.querySelector('.score');
    const result = document.querySelector('.result');
    if ((computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') 
    || (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') 
    || (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper'))
    {
        computerScore++;
        score.textContent = `Your score: ${yourScore} Computer score: ${computerScore}`;
        if (computerScore == 5 && computerScore > yourScore && computerScore != yourScore) 
        {
            result.textContent = `You Lost the game:/ Maybe find something else to do?`;
            computerScore = 0;
            yourScore = 0;
        }
        else result.textContent = `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    }
    else if ((computerSelection == 'scissors' && playerSelection.toLowerCase() == 'rock')
        || (computerSelection == 'rock' && playerSelection.toLowerCase() == 'paper')
        || (computerSelection == 'paper' && playerSelection.toLowerCase() == 'scissors'))
    {
        yourScore++;
        score.textContent = `Your score: ${yourScore} Computer score: ${computerScore}`;
        if (yourScore == 5 && computerScore < yourScore && computerScore != yourScore) 
        {
            result.textContent = `You won the game! Congratulations`;
            computerScore = 0;
            yourScore = 0;
        }
        else result.textContent =`You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
    }
    else if (computerSelection == playerSelection.toLowerCase())
    {
        score.textContent = `Your score: ${yourScore} Computer score: ${computerScore}`;
        result.textContent = `It's a tie! You both selected ${computerSelection}`;
    }
}
const btnr = document.querySelector('#rock');
btnr.addEventListener('click', ()=>playRound('rock'));
const btnp = document.querySelector('#paper');
btnp.addEventListener('click', () => playRound('paper'));
const btns = document.querySelector('#scissors');
btns.addEventListener('click', () => playRound('scissors'));