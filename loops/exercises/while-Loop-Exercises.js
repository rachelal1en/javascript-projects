//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel = 0, numberAstronauts = 0, altitudeReached = 0
;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  const input = require('readline-sync');
  let fuelOk = false;
  
  while (!fuelOk) {
    startingFuelLevel = Number(input.question("Please enter a starting fuel level (5000-30000): "));
    if ((startingFuelLevel >= 5000) && (startingFuelLevel <= 30000)){
      fuelOk = true;
    } else {
      fuelOk = false;
    }
  }
 
//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  let astronautsOk = false;

  while (!astronautsOk) {
    numberAstronauts = Number(input.question("Please enter the number of astronauts (1-7): "));
    if ((numberAstronauts <= 7) && (numberAstronauts >= 1)) {
      astronautsOk = true;
    } else {
      astronautsOk = false;
    }
  }
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let fuelLevel = startingFuelLevel;
while (fuelLevel-100*numberAstronauts >= 0){
  fuelLevel = (fuelLevel - (100*numberAstronauts));
  altitudeReached += 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (altitudeReached >= 2000){
  console.log(`The shuttle gained an altidue of ${altitudeReached} km. Orbit achieved!`);
} else{
  console.log(`The shuttle gained an altidue of ${altitudeReached} km. Failed to reach orbit.`);
}