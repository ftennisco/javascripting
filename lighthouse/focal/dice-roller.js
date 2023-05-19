let num = process.argv.slice(2);
num = Number(num);

function rollingDice(num) {
  let diceRoll = "";
  for (let i = 0; i < num; i++) {
    let diceResult = "";
    diceResult = Math.floor((Math.random() * 6) + 1);
    diceRoll += diceResult + ", ";
  }
  let lastComma = diceRoll.lastIndexOf(", ");
  diceRoll = diceRoll.slice(0, lastComma);

  return diceRoll;
}

console.log("Rolled " + num + " dice: " + rollingDice(num));