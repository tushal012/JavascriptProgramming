const prompt = require("prompt-sync")();

let number = Number(prompt("Enter number : "));

switch (number) {
    case 1: 
        console.log("Unit");
        break;
    case 2: 
        console.log("Ten");
        break;
    case 3: 
        console.log("Hundred");
        break;
    case 4: 
        console.log("Thousand");
        break;
    case 5: 
        console.log("Ten thousand");
        break;
    default: 
        console.log("Invalid!!");
}
