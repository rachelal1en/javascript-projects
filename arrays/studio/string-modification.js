const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let removeLetters = 3;
let shortStr = str.slice(removeLetters,str.length);
let removeStr = str.slice(0,removeLetters);
let newStr = shortStr + removeStr;
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${newStr} has nothing on ${str}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
removeLetters = input.question("How many letters do you want to move? ");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (removeLetters>str.length){
    removeLetters = 3;
    let shortStr = str.slice(removeLetters,str.length);
    let removeStr = str.slice(0,removeLetters);
    let newStr = shortStr + removeStr;
    console.log(`You selected more letter than exist in the word. You were defaulted to 3.
    ${newStr} has nothing on ${str}`);
} else {
    let shortStr = str.slice(removeLetters,str.length);
    let removeStr = str.slice(0,removeLetters);
    let newStr = shortStr + removeStr;
    console.log(`${newStr} has nothing on ${str}`);
}