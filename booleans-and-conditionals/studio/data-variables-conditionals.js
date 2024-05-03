// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 8;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
const fuelMasskg = 760000;
const shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMasskg + shuttleMassKg);
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = "100%";
const weatherStatus = "clear";
let preparedForLiftOff = true;
let countGood = false;
let statusGood = false;
let massGood = false;
let tempGood = false;
let fuelGood = false;
let weatherGood = false;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    countGood = true;
} else {
    countGood = false
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    statusGood = true;
} else{
    statusGood = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    massGood = true;
} else {
    massGood = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp) {
    tempGood = true;
} else{
    tempGood = false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    fuelGood = true;
} else {
    fuelGood = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    weatherGood = true;
} else {
    weatherGood = false;
}
// Verify shuttle launch can proceed based on above conditions
if (countGood && statusGood && massGood && tempGood && fuelGood && weatherGood){
    preparedForLiftOff = true;
} else {
    preparedForLiftOff = false;
}
if (preparedForLiftOff) {
    console.log(`
    All systems are a go! Initiating space shuttle launch sequence.
    ----------------------------------------------------------------
    Date: ${date}
    Time: ${time}
    Astronaut Count: ${astronautCount} kg
    Crew Mass: ${crewMassKg} kg
    Fuel Mass: ${fuelMasskg} kg
    Shuttle Mass: ${shuttleMassKg} kg
    Total Mass: ${totalMassKg} kg
    Fuel Temperature: ${fuelTempCelsius} °C
    Weather Status: ${weatherStatus}
    ----------------------------------------------------------------
    Have a safe trip astronauts!

    `);
} else {
    console.log("Launch scrapped.")
}