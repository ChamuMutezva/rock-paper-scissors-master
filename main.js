const closeBtn = document.querySelector(".fa-times");
const modal = document.querySelector(".modal-container");
const rules = document.querySelector(".rules");
const choices = document.querySelector(".choices");
console.log(choices);

closeBtn.addEventListener("click", function () {
    console.log("hello world");
    modal.style.display = "none";
})
rules.addEventListener("click", function () {
    modal.style.display = "flex";
}, true)

choices.addEventListener("click", function (evt) {
    let targetElement = evt.target;
    let myChoice = "";
    let computerSelection = computerChoice();
   // console.log(targetElement);
    if (targetElement.classList.contains("paper")) {
       // console.log("You have picked paper");
        myChoice = "paper";
        //  alert("You have picked paper")
    } else if (targetElement.classList.contains("rock")) {
       // console.log("You have picked rock");
        myChoice = "rock";
        //  alert("You have picked rock")
    } else {
        myChoice = "scissors";
       // console.log("You have picked scissors");
        //  alert("You have picked scissors")
    }
   // console.log(computerSelection);
    playGame(myChoice, computerSelection)
})

computerChoice = () => {
    const computerChoices = ["rock", "paper", "scissors"];
    const compAnswer = Math.floor(Math.random() * computerChoices.length);
    // console.log(computerChoices[compAnswer]);
    return computerChoices[compAnswer];
}

playGame = (myChoice, computerChoice) => {
    let msg = "game starts...";
   // console.log(msg);
    console.log("My choice is " + myChoice);
    console.log("Computer choice is " + computerChoice);
     switch (myChoice) {
        case "rock":
            if (computerChoice == "rock") {
                console.log("It's a draw");
                msg = "It's a draw";
            } else if (computerChoice == "paper") {
                console.log("Computer wins");
                msg = "Computer wins";
            } else {
                console.log("I win");
                msg = "I win";
            }
            return msg;
            break;

        case "paper": {
            if (computerChoice == "paper") {
                console.log("It's a draw");
                msg = "It's a draw";
            } else if (computerChoice == "scissors") {
                console.log("Computer wins");
                msg = "Computer wins";
            } else {
                console.log("I win");
                msg = "I win";
            }
            return msg;
            break;
        }

        case "scissors": {
            if (computerChoice == "scissors") {
                console.log("It's a draw");
                msg = "It's a draw";
            } else if (computerChoice == "rock") {
                console.log("Computer wins");
                msg = "Computer wins";
            } else {
                console.log("I win");
                msg = "I win";
            }
            return msg;
            break;
        }

    } 
   // console.log(msg);
}