let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
let astroIDs = [];
astroIDs.push(Math.round((Math.random() + 1) * 5));

while (astroIDs.length !== 5) {
   let tempVal = Math.round((Math.random() + 1) * 5);
   if (astroIDs.includes(tempVal)) {
      tempVal = Math.round((Math.random() + 1) * 5);
   } else {
      astroIDs.push(tempVal);
   }
}
// console.log(astroIDs);

superChimpOne["astronautID"] = astroIDs[0];
salamander["astronautID"] = astroIDs[1];
superChimpTwo["astronautID"] = astroIDs[2];
beagle["astronautID"] = astroIDs[3];
tardigrade["astronautID"] = astroIDs[4];

// Add a move method to each animal object
superChimpOne["move"] = function () {return Math.floor(Math.random()*11)};
salamander["move"] = function () {return Math.floor(Math.random()*11)};
superChimpTwo["move"] = function () {return Math.floor(Math.random()*11)};
beagle["move"] = function () {return Math.floor(Math.random()*11)};
tardigrade["move"] = function () {return Math.floor(Math.random()*11)};
// console.log(superChimpOne);
// console.log(superChimpTwo);
// console.log(salamander);
// console.log(beagle);
//console.log(tardigrade);
// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, beagle, tardigrade];
// console.log(crew);
// Print out the relevant information about each animal.
function crewReports(arr) {
   return (`${arr.name} is a ${arr.species}. They are ${arr.age} years old and ${arr.mass} kilograms. Their ID is ${arr.astronautID}.`);
}
// console.log(crewReports(superChimpOne));
// console.log(crewReports(superChimpTwo));
// console.log(crewReports(salamander));
// console.log(crewReports(beagle));
// console.log(crewReports(tardigrade));
// Start an animal race!
function fitnessTest(arr) {
   let results = [];   
   for (let i=0; i <arr.length; ++i) {
      let steps = 0;
      let turns = 0;
      while(steps < 20) {
         steps += arr[i].move();
         turns++;
      }
      results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}
let tempCrew = fitnessTest(crew);
// console.log(tempCrew);
for (let i = 0; i<crew.length; ++i) {
   console.log(tempCrew[i]);
}