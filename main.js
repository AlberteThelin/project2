
const main = document.querySelector("main");

const userWins = document.getElementById("userWins")
const userTies = document.getElementById("userTies")
const userLosses = document.getElementById("userLosses")
const message = document.getElementById("message")

let wins = 0
let ties = 0
let losses = 0
let msg 


function game(userChoice) {
    const randomNumber = Math.floor(Math.random() * 3)
    let computerChoice

    if (randomNumber == 0 ) {
      computerChoice = "r"
    }
    else if (randomNumber == 1 ) {
      computerChoice = "p"
    }
    else if (randomNumber == 2 ) {
      computerChoice = "s"
    }

    if (userChoice == computerChoice ) {
        ties++
        msg = `It´s a tie ! You both picked ${userChoice}`
      }
    else if (userChoice == "r" && computerChoice == "s") {
        wins++
        msg = `It´s a win ! You picked ${userChoice} which beats ${computerChoice}`
      }
    else if (userChoice == "r" && computerChoice == "p") {
        losses++
        msg = `It´s a loss ! The computer picked ${computerChoice} which beats ${userChoice}`
      }
    else if (userChoice == "p" && computerChoice == "r") {
        wins++
        msg = `It´s a win ! You picked ${userChoice} which beats ${computerChoice}`
      }
    else if (userChoice == "p" && computerChoice == "s") {
        losses++
        msg = `It´s a loss ! The computer picked ${computerChoice} which beats ${userChoice}`
      }
    else if (userChoice == "s" && computerChoice == "r") {
        losses++
        msg = `It´s a loss ! The computer picked ${computerChoice} which beats ${userChoice}`
      }
    else if (userChoice == "s" && computerChoice == "p") {
        wins++
        msg = `It´s a win ! You picked ${userChoice} which beats ${computerChoice}`
      }
    
      message.innerHTML = msg
      userWins.innerHTML = `Wins: ${wins}`
      userTies.innerHTML = `Ties: ${ties}`
      userLosses.innerHTML = `Losses: ${losses}`
}


const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

rock.addEventListener('click', function() {
    game("r");
})

paper.addEventListener('click', function() {
    game("p");
})

scissors.addEventListener('click', function() {
    game("s");
})