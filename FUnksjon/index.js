let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const erna_div = document.getElementById("erna");
const kim_div = document.getElementById("kim");
const trump_div = document.getElementById("trump");

function getComputerChoice() {
    const choices = ['e', 'k', 't'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "e") return "Erna";
    if (letter === "t") return "Trump";
    return "Kim Jong-Un";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
}

function lose() {
    console.log("LOSE");
}

function draw() {
    console.log("DRAW");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "et":
        case "tk":
        case "ke":
            win(userChoice, computerChoice);
            break;
        case "te":
        case "kt":
        case "ek":
            lose(userChoice, computerChoice);
            break;
        case "ee":
        case "tt":
        case "kk":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    erna_div.addEventListener('click', function() {
        game("e");
    })

    kim_div.addEventListener('click', function() {
        game("k");
    })

    trump_div.addEventListener('click', function() {
        game("t");
    })
}

main();