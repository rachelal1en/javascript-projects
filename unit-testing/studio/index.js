
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: (num) => {
    if ((num % 2 === 0) && (num % 3 === 0) && (num % 5 === 0)) {
      return "LaunchCode Rocks!";
    }
    if ((num % 2 === 0) && (num % 3 === 0)) {
      return "LaunchCode!";
    }
    if ((num % 3 === 0) && (num % 5 === 0)) {
      return 'Code Rocks!';
    }
    if ((num % 2 === 0) && (num % 5 === 0)) {
      return 'Launch Rocks! (CRASH!!!!)';
    }
    if (num % 2 === 0) {
        return "Launch!";
    }
    else if (num % 3 === 0) {
      return "Code!";
    }
    else if (num % 5 === 0) {
      return "Rocks!";
    }
    else {
      return "Rutabagas! That doesn't work.";
    }
  }
}

module.exports = launchcode;

