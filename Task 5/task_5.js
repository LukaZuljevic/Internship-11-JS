const students = [];
const firstCategory = [];
const secondCategory = [];
const thirdCategory = [];
const fourthCategory = [];

do {
  const name = prompt("Unesi ime studenta").trim();
  const surname = prompt("Unesi prezime studenta").trim();
  const points = getValidPoints("Unesi broj bodova studenta");

  const student = {
    name: name,
    surname: surname,
    points: points,
  };

  students.push(student);
} while (confirm("Zelis li nastaviti"));

students.sort(
  (a, b) => a.surname.localeCompare(b.surname) || a.name.localeCompare(b.name)
);

sortByCategory();

printCategory("Prva kategorija", firstCategory);
printCategory("Druga kategorija", secondCategory);
printCategory("Treca kategorija", thirdCategory);
printCategory("Cetvrta kategorija", fourthCategory);

console.log("\n");

averagePointsByCategory(firstCategory, "Prva kategorija");
averagePointsByCategory(secondCategory, "Druga kategorija");
averagePointsByCategory(thirdCategory, "Treca kategorija");
averagePointsByCategory(fourthCategory, "Cetvrta kategorija");

function getValidPoints(promptString) {
  let points;
  do {
    points = prompt(promptString).trim();
    points = parseFloat(points);
  } while (!(points >= 0 && points <= 100) || isNaN(points));
  return points;
}

function sortByCategory() {
  students.forEach((student) => {
    if (student.points <= 25) {
      firstCategory.push(student);
    } else if (student.points <= 50) {
      secondCategory.push(student);
    } else if (student.points <= 75) {
      thirdCategory.push(student);
    } else {
      fourthCategory.push(student);
    }
  });
}

function printCategory(categoryName, students) {
  console.log("\n" + categoryName + ":");
  students.forEach((student) => {
    console.log(
      `Prezime: ${student.surname}, Ime: ${student.name}, Bodovi: ${student.points}`
    );
  });
}

function averagePointsByCategory(students, categoryName) {
  const totalPoints = students.reduce(
    (acc, student) => acc + student.points,
    0
  );

  const averagePoints = totalPoints / students.length;

  if (isNaN(averagePoints)) {
    console.log(`Nema studenata u kategoriji ${categoryName}`);
    return;
  }

  console.log(
    `Prosjek bodova u kategoriji ${categoryName} je: ${averagePoints}`
  );
}
