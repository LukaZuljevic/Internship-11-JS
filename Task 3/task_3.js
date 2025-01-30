const industries = [];

do {
  const name = prompt("Unesite ime radnika").trim();
  const surname = prompt("Unesite prezime radnika").trim();
  const industryName = prompt("Unesite industriju u kojoj radi radnik")
    .trim()
    .toUpperCase();
  const salary = getValidSalary("Unesite placu radnika");

  const worker = {
    name: name,
    surname: surname,
    industry: industryName,
    salary: salary,
    salaryShare: 0,
  };

  let industry = industries.find((ind) => ind.name === industryName);

  if (!industry) {
    industry = {
      name: industryName,
      salaryShare: 0,
      sectorSalary: 0,
      workers: [],
    };
    industries.push(industry);
  }

  industry.workers.push(worker);
} while (confirm("Zelis li nastaviti"));

let totalSalary = 0;

calculateSalaryShareAndTotalSalary();

let sortedIndustries = industries.sort((a, b) => b.salaryShare - a.salaryShare);

printIndustries();

function printIndustries() {
  sortedIndustries.forEach((industry) => {
    console.log(industry);
  });
}

function calculateSalaryShareAndTotalSalary() {
  industries.forEach((industry) => {
    industry.workers.forEach((worker) => {
      totalSalary += worker.salary;
      industry.sectorSalary += worker.salary;
    });

    industry.workers.forEach((worker) => {
      worker.salaryShare = parseFloat(
        (worker.salary / industry.sectorSalary).toFixed(4)
      );
    });
  });

  industries.forEach((industry) => {
    industry.salaryShare = parseFloat(
      (industry.sectorSalary / totalSalary).toFixed(4)
    );
  });
}

function getValidSalary(promptString) {
  let salary;

  do {
    salary = prompt(promptString).trim();
    salary = parseFloat(salary);
  } while (isNaN(salary) || salary < 0);

  return salary;
}
