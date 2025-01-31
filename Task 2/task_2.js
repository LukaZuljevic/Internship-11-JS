const workersInIndustries = {};

do {
  const name = getValidTextInput("Unesite ime radnika");
  const surname = getValidTextInput("Unesite prezime radnika");
  const industry = getValidTextInput("Unesite industriju u kojoj radi radnik");
  const salary = getValidSalary("Unesite placu radnika");

  const worker = {
    name: name,
    surname: surname,
    industry: industry,
    salary: salary,
  };

  if (!workersInIndustries[industry]) workersInIndustries[industry] = [];

  workersInIndustries[industry].push(worker);
} while (confirm("Zelis li nastaviti"));

const averageSalaryByIndustry = {};
const filteredIndustries = {};

filterAndCalculateAverageSalary(workersInIndustries);

console.log("Industrije: ");
console.log(averageSalaryByIndustry);

console.log("Industrije sa najmanje 2 radnika: ");
console.log(filteredIndustries);

function filterAndCalculateAverageSalary(workersInIndustries) {
  for (const industry in workersInIndustries) {
    let totalSalary = workersInIndustries[industry].reduce(
      (acc, worker) => acc + worker.salary,
      0
    );

    let averageSalary = totalSalary / workersInIndustries[industry].length;

    let workerCount = workersInIndustries[industry].length;

    averageSalaryByIndustry[industry] = {
      ...workersInIndustries[industry],
      averageSalary: averageSalary,
      numberOfWorkers: workerCount,
    };

    if (workerCount >= 2) {
      filteredIndustries[industry] = {
        ...workersInIndustries[industry],
        averageSalary: averageSalary,
        numberOfWorkers: workerCount,
      };
    }
  }
}

function getValidSalary(promptString) {
  let salary;

  do {
    salary = prompt(promptString).trim();
    salary = parseFloat(salary);

    if (isNaN(salary) || salary < 0) alert("Placa mora biti broj veci od 0");
  } while (isNaN(salary) || salary < 0);

  return salary;
}

function getValidTextInput(promptString) {
  let text;

  do {
    text = prompt(promptString).trim().toLowerCase();

    if (text === "") alert("Polje ne smije biti prazno");
  } while (text === "");

  return text;
}
