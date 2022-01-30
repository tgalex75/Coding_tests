const inp = document.getElementById("carattere");
let markk = document.getElementById("mark");

inp.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let inpVal = inp.value;
        inp.value = "";
        markk.innerHTML = "Hai premuto INVIO";
    }
    else {
        markk.innerHTML = "Hai premuto un altro tasto";
    }
});

