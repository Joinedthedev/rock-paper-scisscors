


const computerChoice = function getCPUchoice() {
    const choices = ["rock", "paper", "scissors"];

    const ranNo = Math.random() * 3
    const ranChoice = Math.floor(ranNo);
    console.log(choices[ranChoice]);
    return choices[ranChoice];

}

function round(computer, player) {


    ///tie
    if (computer== player) {
        console.log("ITS A TIE!!")
    
    }

    //paper covers rock
    else if (computer == 'rock' && player == 'paper') {
        console.log("You win! Paper covers rock!")
    }
    else if (computer == 'paper' && player == 'rock') {
        console.log("You lose! Paper covers rock!")
    }

    //rock beats scissors
    else if (computer == "rock" && player == "scissors") {
        console.log("You lose! Rock beats scissors!")
    }

    else if (computer == "scissors" && player == "rock") {
        console.log("You win! Rock beats scissors!")
    }

    //scissors beats paper
    else if (computer == "scissors" && player == "paper") {
        console.log("You lose! scissors beats paper!")
    }

    else if (computer == "paper" && player == "scissors") {
        console.log("You win! scissors beats paper!")
    }

}

round(computerChoice(), 'rock')

