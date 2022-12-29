


const computerChoice = () => {
    const choices = ["rock", "paper", "scissors"];

    const ranNo = Math.random() * 3
    const ranChoice = Math.floor(ranNo);
    return choices[ranChoice];

}
var cpuCount = 0, playerCount = 0;

let round = (computer, player) => {


    ///tie


    if (computer == player) {
        alert("ITS A TIE!!")

    }

    //paper covers rock
    else if (computer == 'rock' && player == 'paper') {
        alert("You win! Paper covers rock!")
        playerCount++;
    }
    else if (computer == 'paper' && player == 'rock') {
        alert("You lose! Paper covers rock!")
        cpuCount++;
    }

    //rock beats scissors
    else if (computer == "rock" && player == "scissors") {
        alert("You lose! Rock beats scissors!")
        cpuCount++;
    }

    else if (computer == "scissors" && player == "rock") {
        alert("You win! Rock beats scissors!")
        playerCount++;
    }

    //scissors beats paper
    else if (computer == "scissors" && player == "paper") {
        alert("You lose! scissors beats paper!")
        cpuCount++;
    }

    else if (computer == "paper" && player == "scissors") {
        alert("You win! scissors beats paper!")
        playerCount++
    }

}

const game = (rounds) => {
    let result = "RESULT: "
    let count = 0;
    while (count < rounds) {
        count++;
        round(computerChoice(), 'scissors')
    }

    if (cpuCount > playerCount) {
        alert(result + "The cpu wins")
    }

    else if (playerCount > cpuCount) {
        alert(result + "The player wins")
    }

    else {
        alert(result + "Its a tie")
    }
}



const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const scores = document.querySelector('.scoreboard');

let playerScore = document.createElement('h4')
let computerScore = document.createElement('h4')

playerScore.textContent = 'Player: ' + playerCount
computerScore.textContent = 'Computer: ' + cpuCount

let pScore = () => playerScore.textContent = 'Player: ' + playerCount;
let cScore = () => computerScore.textContent = 'Computer: ' + cpuCount;


scores.appendChild(playerScore);
scores.appendChild(computerScore)


rock.addEventListener('click', () => {
    round(computerChoice(), 'rock')
    pScore();
    cScore();
    getWinner();
});

paper.addEventListener('click', () => {
    round(computerChoice(), 'paper')
    pScore();
    cScore();
    getWinner();

});

scissors.addEventListener('click', () => {
    round(computerChoice(), 'scissors')
    pScore();
    cScore();
    getWinner();
});

const getWinner = () => {
    if (playerCount ==5) {

        alert("Player wins");
        playerCount = 0;
        cpuCount = 0;
    }

    else if (cpuCount ==5) {
        alert("Cpu wins");
        playerCount = 0;
        cpuCount = 0;

    }
}


