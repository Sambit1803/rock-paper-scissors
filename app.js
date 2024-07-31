let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");
let userWin = false;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const compChoiceInd = Math.floor(Math.random() * 3);
    return options[compChoiceInd];
};

const drawGame = () => {
    //game draws
    msg.innerText = `Game drawn! Play Again.`;
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (winner, userChoice, compChoice) => {
    if(winner){
        // user wins
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        //comp wins
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    let compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        userWin = true;
        if(userChoice === "rock"){
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});