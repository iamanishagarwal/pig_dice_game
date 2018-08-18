var score, activePlayer, roundScore, gamePlaying, winningScore;
// var six;
init();

//Adding Event Listener to the roll dice button
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
});


//Adding Event Listener to the hold button 
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


//Adding Event Listener to the new game button
document.querySelector(".btn-new").addEventListener("click", function () {
    init();
    document.querySelector(".player-0-panel").classList.add("active");
});


//Adding Event Listener to the Winning Score input place 
document.querySelector("#inputNum").addEventListener("change", init);


//Changing Player
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


//Initializing function
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
