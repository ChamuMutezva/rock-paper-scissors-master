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
    console.log(targetElement);
    if (targetElement.classList.contains("paper")) {
        console.log("You have picked paper");
    } else if (targetElement.classList.contains("rock")) {
        console.log("You have picked rock");
    } else {
        console.log("You have picked scissors");
    }
})