const cities = [];

do {
  const city = prompt("Enter city name");
  cities.push(city);
} while (confirm("Zelis li nastaviti?"));

const sortedCitiesByName = cities.sort((a, b) => a.localeCompare(b));

const citiesWithBigNames = sortedCitiesByName.filter((city) => city.length > 5);

const csvFormat = citiesWithBigNames.join(", ");

console.log(csvFormat);

const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", () => {
  const blob = new Blob([csvFormat], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "cities.txt";
  link.click();
});
