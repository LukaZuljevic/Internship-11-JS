const equipment = [];
const submitButton = document.querySelector("#submitButton");
const list = document.createElement("ul");
const ratio = document.createElement("p");
document.body.appendChild(list);
document.body.appendChild(ratio);

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let equipmentName = document.querySelector("#name").value;
  let equipmentPrice = document.querySelector("#price").value;
  let status = document.querySelector("#status").value;

  const equipmentPiece = {
    name: equipmentName,
    price: equipmentPrice,
    status: status,
  };

  if (!equipmentPiece.name || !equipmentPiece.price) {
    alert("Please fill in all fields");
    return;
  }

  equipment.push(equipmentPiece);

  equipment.sort(
    (a, b) => a.status.localeCompare(b.status) || a.name.localeCompare(b.name)
  );

  createRatio();

  updateEquipmentList();

  document.querySelector("form").reset();
});

function createRatio() {
  const ratioAvailable = equipment.filter(
    (equipmentPiece) => equipmentPiece.status === "Dostupno"
  ).length;

  const ratioUnavailable = equipment.filter(
    (equipmentPiece) => equipmentPiece.status === "Nedostupno"
  ).length;

  ratio.textContent = `OMJER : ${ratioAvailable} / ${ratioUnavailable}`;
}

function updateEquipmentList() {
  list.innerHTML = "";

  equipment.forEach((equipmentPiece) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${equipmentPiece.name} - ${equipmentPiece.price} - ${equipmentPiece.status}`;
    listItem.style.color =
      equipmentPiece.status === "Nedostupno" ? "red" : "green";
    list.appendChild(listItem);
  });
}
