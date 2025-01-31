const plants = [];
const colors = [];

do {
  const name = getValidTextInput("Unesite ime biljke");
  const color = getValidTextInput("Unesite boju biljke");
  const calories = getValidCalories("Unesi kalorije biljke");

  const plant = {
    name: name,
    color: color,
    calories: calories,
  };

  if (!colors[plant.color]) colors[plant.color] = [];

  colors[plant.color].push(plant);

  plants.push(plant);
} while (confirm("Zelis li nastaviti"));

const sortedColors = Object.keys(colors)
  .sort()
  .reduce((acc, color) => {
    acc[color] = colors[color];
    return acc;
  }, {});

console.log("Biljke sortirane po boji: ");
console.log(sortedColors);

const colorsWithCalories = [];

calculateColorsWithCalories();

console.log("\nBoje sa ukupnim kalorijama: ");
console.log(colorsWithCalories);

colorsWithCalories.sort((a, b) => b.totalCalories - a.totalCalories);

console.log("\n");
colorsWithCalories.slice(0, 3).forEach((color, index) => {
  console.log(`Boja broj ${index + 1} sa najviše kalorija: ${color.color}`);
});

function calculateColorsWithCalories() {
  for (const color in sortedColors) {
    const totalCalories = colors[color].reduce(
      (acc, plant) => acc + plant.calories,
      0
    );

    colorsWithCalories.push({ color: color, totalCalories: totalCalories });
  }
}

function getValidCalories(promptString) {
  let calories;
  do {
    calories = prompt(promptString).trim();
    calories = parseFloat(calories);

    if (isNaN(calories) || calories < 0)
      alert("Kalorije moraju biti broj veci od 0");
  } while (isNaN(calories) || calories < 0);
  return calories;
}

function getValidTextInput(promptString) {
  let text;

  do {
    text = prompt(promptString).trim().toLowerCase();

    if (text === "") alert("Polje ne smije biti prazno");
  } while (text === "");

  return text;
}
