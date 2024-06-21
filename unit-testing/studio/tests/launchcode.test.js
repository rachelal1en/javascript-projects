// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
test("should return 'nonprofit' for organization key", ()=> {
  expect(launchcode.organization).toBe("nonprofit");
})
test("should return Jeff for executive director", ()=> {
  expect(launchcode.executiveDirector).toBe("Jeff");
})
test("should return 100 for percentage cool employees", () => {
  expect(launchcode.percentageCoolEmployees).toBe(100);
})
test("should return 'Web Development'from index 0 of programs offered", ()=> {
  expect(launchcode.programsOffered[0]).toBe("Web Development");
})
test("should return 'Data Analysis'from index 1 of programs offered", ()=> {
  expect(launchcode.programsOffered[1]).toBe("Data Analysis");
})
test("should return 'Liftoff'from index 2 of programs offered", ()=> {
  expect(launchcode.programsOffered[2]).toBe("Liftoff");
})
test("should return array size of 3", ()=> {
  expect(launchcode["programsOffered"].length).toBe[3];
})
test("launchOutput() should return 'Launch!' when number divisible by 2", () => {
  expect(launchcode.launchOutput(2)).toBe("Launch!");
})
test("launchOutput() should return 'Code!' when number divisible by 3", () => {
  expect(launchcode.launchOutput(3)).toBe("Code!");
})
test("launchOutput() should return 'Rocks!' when number divisible by 5", () => {
  expect(launchcode.launchOutput(5)).toBe("Rocks!");
})
test("launchOutput() should return 'LaunchCode!' when number divisible by 2 & 3", () => {
  expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
})
test("launchOutput() should return 'Code Rocks!' when number divisible by 3 & 5", () => {
  expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
})
test("launchOutput() should return 'Launch Rocks! (CRASH!!!!)' when number divisible by 2 & 5", () => {
  expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
})
test("launchOutput() should return 'LaunchCode!' when number divisible by 2 & 3 & 5", () => {
  expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
})
test("launchOutput() should return 'LaunchCode!' when number not divisible by 2 or 3 or 5", () => {
  expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");
})
});