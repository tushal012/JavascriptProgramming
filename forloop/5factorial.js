const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number : "));

    let factorial = 1;

    for (let i = 2; i <= number; i++) {
        factorial = factorial * i;
    }

    console.log("Factorial of " +number/n + factorial);
