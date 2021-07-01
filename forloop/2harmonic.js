const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number : "));

    let harmonicNumber = 1;

    for (let i = 1; i <= number; i++) {
        harmonicNumber += 1 / i;
    }

    console.log("Harmonic Number is " + harmonicNumber);