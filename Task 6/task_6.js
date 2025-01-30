const equipment = [];

do {
  const name = prompt("Unesite naziv opreme:");
  const price = getValidPrice("Unesite cijenu opreme:");
  let status = confirm("Je li oprema dostupna?");

  status = status ? "Dostupno" : "Nije dostupno";

  equipmentPiece = {
    name: name,
    price: price,
    status: status,
  };

  equipment.push(equipmentPiece);
} while (confirm("Zelis li nastaviti?"));

equipment.forEach((piece, index) => {
  if (piece.status === "Nije dostupno")
    console.log("Nije dostupan index: " + index);
});

const totalPrice = equipment.reduce((acc, piece) => acc + piece.price, 0);

const availableEquipment = equipment.filter(
  (piece) => piece.status === "Dostupno"
);

const totalPriceAvailable = availableEquipment.reduce(
  (acc, piece) => acc + piece.price,
  0
);
const totalPriceUnavailable = parseFloat(
  (((totalPrice - totalPriceAvailable) / totalPrice) * 100).toFixed(4)
);

availableEquipment.sort(
  (a, b) => a.price - b.price || a.name.localeCompare(b.name)
);

console.log("\nDostupna oprem sortirana po cijeni:");
console.log(availableEquipment);

console.log(
  "\nUkupni udio cijena ne dostupne opreme: " + totalPriceUnavailable + "%"
);

sortEquipmentByPriceCategory();

function sortEquipmentByPriceCategory() {
  const cheapEquipment = availableEquipment.filter(
    (piece) => piece.price < 100
  );
  const middleEquipment = availableEquipment.filter(
    (piece) => piece.price >= 100 && piece.price <= 300
  );
  const expensiveEquipment = availableEquipment.filter(
    (piece) => piece.price > 300
  );

  console.log("\nJeftina oprema: ");
  console.log(cheapEquipment);
  console.log("Srednja oprema: ");
  console.log(middleEquipment);
  console.log("Skupa oprema: ");
  console.log(expensiveEquipment);
}

function getValidPrice(promptString) {
  let price;

  do {
    price = prompt(promptString).trim();
    price = parseFloat(price);
  } while (isNaN(price) || price < 0);

  return price;
}
