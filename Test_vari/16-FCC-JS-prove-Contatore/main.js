const contatore = document.getElementById("contatore");
const nextB = document.getElementById("next");
const previousB = document.getElementById("previous");

let count = 0;

contatore.innerText = count;

nextB.addEventListener("click", incCounter);


function incCounter (){
    count +=1
    if (count > 99) {
        count = 0;
    }
    contatore.innerText  = count;
}

previousB.addEventListener("click", decCounter);

function decCounter (){
    count -=1
    if (count < 0) {
        count = 99;
    }
    contatore.innerText = count;
}

