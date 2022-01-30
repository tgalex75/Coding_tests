let count = 0;

function cc(card) {
  // Modifica il codice solo sotto questa riga
  const bet = " Bet";
  const hold = " Hold";
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count++;
    
  } else if (card == 7 || card == 8 || card == 9) {
    count;
  } else if (
    card == 10 ||
    card == "J" ||
    card == "Q" ||
    card == "K" ||
    card == "A"
  ) {
    count--;
  }
if (count <= 0) {
console.log (count + hold);
}
else if (count > 0) {
console.log (count + bet);
}
  
  return "Change Me";
  
  // Modifica il codice solo sopra questa riga
}

cc(3);
cc(7);
cc("Q");
cc(8);
cc("A");