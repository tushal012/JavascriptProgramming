const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number : "));

for (let i = 1; i <= number; i++) {
    console.log(`${Math.pow(2, i)}`);
}