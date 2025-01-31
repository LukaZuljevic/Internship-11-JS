let n;

do {
  n = getValidNumber("Unesi broj: ");
} while (isNaN(n) || n < 0);

const squares = new Array(n).fill(0).map((_, i) => Math.pow(i + 1, 2));

const totalValue = squares.reduce((acc, number) => acc + number, 0);

const averageValue = parseFloat(totalValue / n).toFixed(2);

let median =
  n % 2 === 1
    ? squares[Math.floor(n / 2)]
    : (squares[Math.floor(n / 2)] + squares[Math.floor(n / 2 - 1)]) / 2;

console.log("Kvadrati brojeva: ");
console.log(squares);
console.log("Ukupna vrijednost: " + totalValue);
console.log("Prosjecna vrijednost: " + averageValue);
console.log("Medijan: " + median);

function getValidNumber(promptString) {
  let number;
  do {
    number = prompt(promptString).trim();
    number = parseFloat(number);

    if (isNaN(number) || number < 0) alert("Broj mora biti broj veci od 0");
  } while (isNaN(number) || number < 0);
  return number;
}
