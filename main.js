const closeBtn = document.querySelector(".fa-times");
const modal = document.querySelector(".modal");
const rules = document.querySelector(".rules");
const choices = document.querySelector(".choices");
console.log(choices);
closeBtn.addEventListener("click", function(){
    console.log("hello world");
    modal.style.display = "none";
})
rules.addEventListener("click", function(){  
    modal.style.display = "block";
}, true)
choices.addEventListener("click", function(evt){
    console.log(evt.target);
})