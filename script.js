


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
        console.log("ITS A TIE!!")

    }

    //paper covers rock
    else if (computer == 'rock' && player == 'paper') {
        console.log("You win! Paper covers rock!")
        playerCount++;
    }
    else if (computer == 'paper' && player == 'rock') {
        console.log("You lose! Paper covers rock!")
        cpuCount++;
    }

    //rock beats scissors
    else if (computer == "rock" && player == "scissors") {
        console.log("You lose! Rock beats scissors!")
        cpuCount++;
    }

    else if (computer == "scissors" && player == "rock") {
        console.log("You win! Rock beats scissors!")
        playerCount++;
    }

    //scissors beats paper
    else if (computer == "scissors" && player == "paper") {
        console.log("You lose! scissors beats paper!")
        cpuCount++;
    }

    else if (computer == "paper" && player == "scissors") {
        console.log("You win! scissors beats paper!")
        playerCount++
    }

}

const game = (rounds) => {
    let result = "RESULT: "
    let count = 0;
    while (count < rounds){
        count++;
        round(computerChoice(), 'scissors')
    }

    if (cpuCount > playerCount) {
        console.log(result + "The cpu wins")
    }

    else if (playerCount > cpuCount) {
        console.log(result + "The player wins")
    }

    else {
        console.log(result + "Its a tie")
    }
}

game(10);



