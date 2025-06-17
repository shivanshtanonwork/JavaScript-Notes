let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const drawGame = (userChoice, compChoice) => {
    console.log("Game was draw")
    msg.innerHTML = `Draw ${userChoice} is equal to ${compChoice}`
    msg.style.backgroundColor = "#583E23"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerHTML = userScore
        console.log("You win!")
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        compScorePara.innerHTML = compScore
        console.log("You loose")
        msg.innerHTML = `You loose ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "#FE4A49"
    }
}

const playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`)
    const compChoice = genCompChoice()
    console.log(compChoice)

    if (userChoice === compChoice) {
        //Draw Game
        drawGame(userChoice, compChoice)
    } else {
        let userWin = true
        if (userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true
        } else {
            //rock paper
            userWin = compChoice === "rock" ? false : true

        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})