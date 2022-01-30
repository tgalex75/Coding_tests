let displayNumber = document.getElementById("number");
let resetNumber = document.getElementById("insert-number");

let number = 0;


const prev = document.getElementById("previous");
const next = document.getElementById("next");

prev.addEventListener("click", function() {
    displayNumber.innerHTML = --number;
    if (number < 0) {
        number = 99;
    }
})
next.addEventListener("click", function() {
    displayNumber.innerHTML = ++number;
    if (number > 99) {
        number = 0;
    }
})
