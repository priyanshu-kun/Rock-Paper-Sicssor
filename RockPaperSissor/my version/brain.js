console.log("hello")
let userMoves = [];
let ComputerMoves = [];
let ComputerMoveList = ['rock', 'paper', 'sissor'];
let userRemaningChance = 0;
let machineRemaningChance = 0;
const userData = $("#user-data");
const machineData = $("#machine-data");
const makeMove = $(".game");


function createWinningResult() {
    if(userRemaningChance === 3 || machineRemaningChance === 3 || (userRemaningChance === 3 && machineRemaningChance === 3)){
        if(userRemaningChance === 3) {
            $(".wrapper").html("Finally Machine Wins!");
        }
        else if(machineRemaningChance === 3) {
            $(".wrapper").html("Finally user Wins!");
        }
        else {
            $(".wrapper").html("<h1>whole match Draw!</h1>");
        }
    }
}


function makeresult() {
    console.log(userMoves[userMoves.length-1]);
    console.log(ComputerMoves[ComputerMoves.length-1]);

    if(userMoves[userMoves.length-1] === ComputerMoves[ComputerMoves.length-1]){
        userRemaningChance++;
        machineRemaningChance++;
        userData.html(userRemaningChance);
        machineData.html(machineRemaningChance);
        $(".massagebox").html("Match Draw!");
    }
    else if(userMoves[userMoves.length-1] === 'rock' && ComputerMoves[ComputerMoves.length-1] === 'paper') {
        userRemaningChance++;
        userData.html(userRemaningChance);
        $(".massagebox").html("Machine Wins!");
    }
    else if(userMoves[userMoves.length-1] === 'paper' && ComputerMoves[ComputerMoves.length-1] === 'rock') {
        machineRemaningChance++;
        machineData.html(machineRemaningChance);
        $(".massagebox").html("User Wins!");
    }
    else if(userMoves[userMoves.length-1] === 'paper' && ComputerMoves[ComputerMoves.length-1] === 'sissor') {
        userRemaningChance++;
        userData.html(userRemaningChance);
        $(".massagebox").html("Machine Wins!");
    }
    else if(userMoves[userMoves.length-1] === 'sissor' && ComputerMoves[ComputerMoves.length-1] === 'paper') {
        machineRemaningChance++;
        machineData.html(machineRemaningChance);
        $(".massagebox").html("User Wins!");
    }
    else if(userMoves[userMoves.length-1] === 'sissor' && ComputerMoves[ComputerMoves.length-1] === 'rock') {
        userRemaningChance++;
        userData.html(userRemaningChance);
        $(".massagebox").html("Machine Wins!");
    }
    else if(userMoves[userMoves.length-1] === 'rock' && ComputerMoves[ComputerMoves.length-1] === 'sissor') {
        machineRemaningChance++;
        machineData.html(machineRemaningChance);
        $(".massagebox").html("User Wins!");
    }

    createWinningResult();
}


function makeUserMove(Move) {
    userMoves.push(Move.dataset.element);
    console.log("User Move: ", Move.dataset.element)
}


function ComputerMovesPicker() {
    let pickMove = ComputerMoveList[Math.floor(Math.random() * ComputerMoveList.length)];
    ComputerMoves.push(pickMove);
}




makeMove.on("click", function () {
    makeUserMove(this)
    ComputerMovesPicker();
    makeresult();
})



