//defining player's  input
const buttons = document.querySelectorAll('.btn');

let playerSelection;
buttons.forEach((button) => {button.addEventListener('click',()=>{
    playerSelection= button.id;
    playRound(playerSelection, computerSelection);
})})

//defining computer's input
function computerPlay() {
    return (Math.floor(Math.random() * 3));
}
function changeValue() {
    if (computerPlay() === 0) {
        return 'rock';
    } else if (computerPlay() === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
computerSelection = changeValue();

//we have inputs, let's play
let playerScore = 0;
let computerScore =0;
function playRound(playerSelection, computerSelection) {
    let results = "";
    playerSelection = playerSelection.toLowerCase();
    computerSelection = changeValue();

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
            playerScore+= 1;
            results = (`You win ! ${playerSelection} beats ${computerSelection}<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`);

            if (playerScore === 5) {
                finalResult = ('Congratulations, you WON the game ! reload to play again.');
                disableButtons();
                document.getElementById('finalResult').innerHTML = finalResult;
            }
    } 
    else if (playerSelection === computerSelection) {
        results = ("It's a tie, you both played " + playerSelection + "<br><br>Player score: " + playerScore +
                   "<br>Computer score: " + computerScore );
    }
    else {
        computerScore += 1;
        results = ("You lose ! "  + computerSelection  + ' beats '  + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

        if (computerScore === 5) {
            finalResult = ('Computer WINS the game !!! reload to play again.');
            disableButtons();
            document.getElementById('finalResult').innerHTML = finalResult;

        }
    }
    document.getElementById('results').innerHTML = results;
    //document.getElementById('finalResult').innerHTML = finalResult;
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}
/*fhfhfhfhfhfhhhhhhhhhhhhhhhhhhh*/

