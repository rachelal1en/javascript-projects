// Declare and assign the variables below
let nameOfTheSpaceShuttle = "Determination";
let shuttleSpeedmph = 17500;
let distanceToMarskm = 225000000;
let distanceToTheMoonkm = 384400;
const milesPerKilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfTheSpaceShuttle);
console.log(typeof shuttleSpeedmph);
console.log(typeof distanceToMarskm);
console.log(typeof distanceToTheMoonkm);
console.log(typeof milesPerKilometer);
// Calculate a space mission below
let distanceToMarsmi = distanceToMarskm * milesPerKilometer;
let hoursToMars = distanceToMarsmi / shuttleSpeedmph;
let distanceToMarsDays = hoursToMars/24;
// Print the results of the space mission calculations below
console.log(nameOfTheSpaceShuttle + " will take " + distanceToMarsDays + " days to reach Mars.");
// Calculate a trip to the moon below
let distanceToTheMoonmi = distanceToTheMoonkm * milesPerKilometer;
let hoursToTheMoon = distanceToTheMoonmi / shuttleSpeedmph;
let distanceToTheMoonDays = hoursToTheMoon/24;
// Print the results of the trip to the moon below
console.log(nameOfTheSpaceShuttle + " will take " + distanceToTheMoonDays + " days to reach the Moon.");