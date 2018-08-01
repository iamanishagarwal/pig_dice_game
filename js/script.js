/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, activePlayer, roundScore, gamePlaying, winningScore;
// var six;
init();

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying) {
        document.querySelector(".dice").style.display = "block";
        //        document.querySelectorAll(".dice")[1].style.display = "block";
        var randomValue = Math.floor(Math.random() * 6) + 1;
        //       var randomValue2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice").src = "img/dice-" + randomValue + ".png";
        //        document.querySelectorAll(".dice")[1].src = "dice-" + randomValue2 + ".png";
        if (randomValue !== 1) {
            roundScore += randomValue;
            document.getElementById("current-" + activePlayer).textContent = roundScore;

            //            if (randomValue1 === 6 && randomValue2 === 6) {
            //                //               checkForsix();
            //                //                six = true;
            //                score[activePlayer] = 0;
            //                document.getElementById("score-" + activePlayer).textContent = score[activePlayer];
            //                changePlayer();
            //            } else {
            //                six = false;
            //            }

        } else {
            //            six = false;
            changePlayer();
        }
    }
    //    console.log(randomValue1);
    //    console.log(randomValue2);

});

document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlaying) {

        score[activePlayer] += roundScore;
        document.getElementById("score-" + activePlayer).textContent = score[activePlayer];

        if (score[activePlayer] >= winningScore) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");

            document.querySelector(".dice").style.display = "none";
            //            document.querySelectorAll(".dice")[1].style.display = "none";

            gamePlaying = false;

        } else {
            changePlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click", function () {

    init();

    document.querySelector(".player-0-panel").classList.add("active");

});

document.querySelector("#inputNum").addEventListener("change", init);

function changePlayer() {
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector(".dice").style.display = "none";
    //    document.querySelectorAll(".dice")[1].style.display = "none";

};


//function checkForsix() {
//    if (six == true) {
//        score[activePlayer] = 0;
//        document.getElementById("score-" + activePlayer).textContent = score[activePlayer];
//        changePlayer();
//    }
//}


function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    //    six = false;
    winningScore = document.querySelector("#inputNum").value;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.add("active");

    //    document.querySelectorAll(".dice")[1].style.display = "none";
    document.querySelector(".dice").style.display = "none";
}
