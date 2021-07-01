const prompt = require("prompt-sync")();

let number = prompt("Enter a number : ");

if (number == 1)
    console.log("unit");
else if (number == 10)
    console.log("Ten");
else if (number == 100)
    console.log("Hundred");
else if (number == 1000)
    console.log("Thousand");
else if (number == 10000)
    console.log("Ten thousand");
else
    console.log("Invalid!!");