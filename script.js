var winnerMessage = document.querySelector(".winner");
var score = document.getElementById("score");
var buttons = document.querySelectorAll("input");
var displayModal = document.getElementById("displayModal");
var playAgain = document.getElementById("playagain");
var closeModal = document.getElementById("closemodal");
var message = document.getElementById("message");
var scores = [0, 0];

var playerName = prompt("Enter name: ");
if(!playerName) {
    playerName = "Anonymous";
} else {
    playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
}


for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
    var playerSelect = e.target.value;
    var computerSelect = Math.random();


    if(computerSelect <= .37) {
        computerSelect = "Rock";
    } else if(computerSelect <= .67) {
        computerSelect = "Paper";
    } else {
        computerSelect = "Scissors";
    }
    // console.log("you: " + playerSelect + ", computer: " + computerSelect);
    var result = checkWinner(playerSelect, computerSelect);

    if (result === 'Player') {
        result = playerName + ' wins!';
        scores[0]++;
    }

    if (result === 'Computer') {
        result += ' wins!';
        scores[1]++;
    }

    if (result === 'Draw') {
        result += '. It\'s a tie!';
    }
    
    if( (scores[0] >= 10) || (scores[1]) >= 10) {
        endGame();
        winnerMessage.innerHTML = result;
    } else {
        score.innerHTML = playerName + ": " + scores[0] + " , " + "Computer: " + scores[1];
        message.innerHTML = result + " this round.";
    }

}

function checkWinner(player, computer) {
    if (player === computer) {
        return 'Draw';
    }

    if (player === 'Rock') {
        if (computer === 'Paper') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper') {
        if (computer === 'Scissors') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors') {
        if (computer === 'Rock') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}
function endGame() {
    for(var j = 0; j < buttons.length; j++) {
        buttons[j].disabled = true;
    }
    $("#displayModal").modal("show");
    playAgain.addEventListener("click", reset);
    closeModal.addEventListener("click", reset);
}
function reset() {
    scores = [0, 0];
    score.innerHTML = "";
    message.innerHTML = "";
    for(var x = 0; x < buttons.length; x++) {
        buttons[x].disabled = false;
    }
}