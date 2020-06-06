// console.log("Hello,world!")
let UserScore = 0;
let ComputerScore = 0;
const UserScore_span = document.querySelector("#user-score");
const ComputerScore_span = document.querySelector("#computer-score");
const ScoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".results");
const buttons = document.querySelectorAll(".choice");
const Final_Result = document.querySelector(".wrapper");
// console.log(buttons)


function getComputerChoice() {
    let ComputerChoiceList = ["Rock", "Paper", "Scissor"];
    let ComputerChoice = ComputerChoiceList[Math.floor(Math.random() * ComputerChoiceList.length)];
    // console.log(ComputerChoice);
    return ComputerChoice;
}


function Endresult() {
    if(UserScore === 5) Final_Result.innerHTML = `<h1 class="winnerDec">This is End Game and the winner is User!🎉🎊🎇 </br> (Refresh your browser window to Continue)</h1>`;
    else if(ComputerScore === 5) Final_Result.innerHTML = `<h1 class="winnerDec">This is End Game and the winner is Computer!🎉🎊🎇 </br> (Refresh your browser window to Continue)</h1>`;
}


function winner(UserC, CompC) {
    UserScore++;
    UserScore_span.innerHTML = UserScore;
    let SmallUserName = "user".fontsize(3).sub();
    let SmallcompName = "computer".fontsize(3).sub();
    result_div.firstElementChild.innerHTML = `${UserC}${SmallUserName} beats ${CompC}${SmallcompName} "You Win!"🔥`;
    Endresult()
    document.querySelector(`.${UserC}`).classList.add("win-class")
    setTimeout(() => document.querySelector(`.${UserC}`).classList.remove("win-class"), 300);
}


function lost(UserC, CompC) {
    ComputerScore++;
    ComputerScore_span.innerHTML = ComputerScore;
    let SmallUserName = "user".fontsize(3).sub();
    let SmallcompName = "computer".fontsize(3).sub();
    result_div.firstElementChild.innerHTML = `${CompC}${SmallcompName} lost to ${UserC}${SmallUserName} "You lose!"😑`;
    Endresult()
    document.querySelector(`.${UserC}`).classList.add("lose-class");
    setTimeout(() => document.querySelector(`.${UserC}`).classList.remove("lose-class"), 300);
}


function draw(UserC, CompC) {
    let SmallUserName = "user".fontsize(3).sub();
    let SmallcompName = "computer".fontsize(3).sub();
    result_div.firstElementChild.innerHTML = `${UserC}${SmallUserName} equals to ${CompC}${SmallcompName} "Match Draw!"😒`;
    Endresult()
    document.querySelector(`.${UserC}`).classList.add("draw-class");
    setTimeout(() => document.querySelector(`.${UserC}`).classList.remove("draw-class"), 300);
}


function game(UserChoice) {
    // console.log(User/Choice)
    let CompChoice = getComputerChoice();
    // console.log(`Computer: ${CompChoice} and User: ${UserChoice}`);
    switch (`${UserChoice} - ${CompChoice}`) {
        case "Rock - Scissor":
        case "Paper - Rock":
        case "Scissor - Paper":
            winner(UserChoice, CompChoice);
            break;

        case "Rock - Paper":
        case "Paper - Scissor":
        case "Scissor - Rock":
            lost(UserChoice, CompChoice);
            break;

        case "Rock - Rock":
        case "Paper - Paper":
        case "Scissor - Scissor":
            draw(UserChoice, CompChoice);
            break;
    }
}


function main() {
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // console.log(this.id)
            if (this.id === "rock-div") {
                game("Rock")
            }
            else if (this.id === "paper-div") {
                game("Paper")
            }
            else {
                game("Scissor");
            }
        })
    })
}

main();