function getComputerChoice () {
    v = Math.floor(Math.random() * 3);
    return v;
}

// function getHumanChoice () {
//     console.log(choice);
//     return choice;
// }

function playRound (humanChoice){
    let computerChoice = getComputerChoice();
    if(humanChoice == computerChoice){
        msg.textContent = `Computer Chose ` + computerChoice + ` , Tie!`;
    }
    if(humanChoice == 0 && computerChoice == 1){
        computerScore += 1;
        compScore.textContent = computerScore;
        msg.textContent = 'You Lose!'
    }
    if(humanChoice == 0 && computerChoice == 2){
        humanScore += 1;
        humScore.textContent = humanScore;
        msg.textContent = 'You Win!'
    }
    if(humanChoice == 1 && computerChoice == 2){
        computerScore += 1;
        compScore.textContent = computerScore;
        msg.textContent = 'You Lose!'
    }
    if(humanChoice == 1 && computerChoice == 0){
        humanScore += 1;
        humScore.textContent = humanScore;
        msg.textContent = 'You Win!'
    }
    if(humanChoice == 2 && computerChoice == 0){
        computerScore += 1;
        compScore.textContent = computerScore;
        msg.textContent = 'You Lose!'
    }


}


let humanScore = 0;
let computerScore = 0;


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const humScore = document.querySelector('.humanScore');
const compScore = document.querySelector('.computerScore');
const msg = document.querySelector('.result');

humScore.textContent = humanScore;
compScore.textContent = computerScore;

rock.addEventListener('click', () => {
    playRound(0);
});

paper.addEventListener('click', () => {
    playRound(1);
});

scissors.addEventListener('click', () => {
    playRound(2);
});