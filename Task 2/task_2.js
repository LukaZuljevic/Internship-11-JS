const workersInIndustries = {};

do {
  const name = prompt("Unesite ime radnika").trim();
  const surname = prompt("Unesite prezime radnika").trim();
  const industry = prompt("Unesite industriju u kojoj radi radnik")
    .trim()
    .toUpperCase();
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
  } while (isNaN(salary) || salary < 0);

  return salary;
}
