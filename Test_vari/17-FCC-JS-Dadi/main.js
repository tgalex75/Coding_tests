const container = document.getElementById("container");
const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");
const puntiG1 = document.getElementById("punti-g1");
const puntiG2 = document.getElementById("punti-g2");
const message = document.getElementById("messaggio");
const btnStart = document.getElementById("btn-start");
const btnReset = document.getElementById("btn-reset");
const btnAgain = document.getElementById("btn-again");

let pointsG1 = 0;
let pointsG2 = 0;
let player1Launch = 0;
let player2Launch = 0;

const imgDadi = [
  "./img/face_1.png",
  "./img/face_2.png",
  "./img/face_3.png",
  "./img/face_4.png",
  "./img/face_5.png",
  "./img/face_6.png",
];

function randomNum() {
  let randomNumber = Math.floor(Math.random() * 6);
  return randomNumber;
}

btnStart.addEventListener("click", startGame);

function startGame() {
  player1Launch = randomNum();
  player2Launch = randomNum();
  if (player1Launch > player2Launch) {
    pointsG1 += 1;
    message.textContent = "Ha vinto il Giocatore 1";
  } else if (player1Launch < player2Launch) {
    pointsG2 += 1;
    message.textContent = "Ha vinto il Giocatore 2";
  } else {
    message.textContent = "Il lancio è finito in pareggio";
  }
  renderGame();
}


function renderGame() {
  puntiG1.textContent = pointsG1;
  puntiG2.textContent = pointsG2;
  dado1.innerHTML = `<img src="${imgDadi[player1Launch]}" alt="">`;
  dado2.innerHTML = `<img src="${imgDadi[player2Launch]}" alt="">`;
}

btnAgain.addEventListener("click", function () {
  startGame();
});

btnReset.addEventListener("click", function () {
  puntiG1.textContent = 0;
  puntiG2.textContent = 0;
  dado1.innerHTML = "";
  dado2.innerHTML = "";
});
