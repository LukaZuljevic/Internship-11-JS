const books = [];

do {
  const title = getValidTextInput("Unesi naslov knjige");
  let price = getValidPrice("Unesi cijenu knjige");
  const genre = getValidTextInput("Unesi zanr knjige");

  const book = {
    title: title,
    price: price,
    genre: genre,
  };

  books.push(book);
} while (confirm("Zelis li nastaviti"));

const totalPrice = books.reduce((acc, book) => acc + book.price, 0);
const averagePrice = totalPrice / books.length;

const biggestDifference = biggestDifferenceFromAverage();

console.log("Prosjecna cijena " + averagePrice);
console.log("Najveca razlika od prosjecne cijene: ");
console.log(biggestDifference);

const sortedBooks = books.sort((a, b) => a.difference - b.difference);

console.log("Knjige sortirane po razlici od prosjecne cijene:");
console.log(sortedBooks);

function biggestDifferenceFromAverage() {
  let biggestDifference = 0;
  let bookWithBiggestDifference = null;

  books.forEach((book) => {
    const difference = Math.abs(book.price - averagePrice);

    book.difference = difference;

    if (difference > biggestDifference) {
      biggestDifference = difference;
      bookWithBiggestDifference = book;
    }
  });

  return bookWithBiggestDifference;
}

function getValidPrice(promptString) {
  let price;

  do {
    price = prompt(promptString).trim();
    price = parseFloat(price);

    if (isNaN(price) || price < 0) alert("Cijena mora biti broj veci od 0");
  } while (isNaN(price) || price < 0);

  return price;
}

function getValidTextInput(promptString) {
  let text;

  do {
    text = prompt(promptString).trim().toLowerCase();

    if (text === "") alert("Polje ne smije biti prazno");
  } while (text === "");

  return text;
}
