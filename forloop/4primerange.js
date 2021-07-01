const prompt = require("prompt-sync")();

let startNumber = Number(prompt("Enter starting number "));
let endNumber = Number(prompt("Enter ending number "));

if (startNumber >= 0 && startNumber < endNumber) {
    for (let number = startNumber; number <= endNumber; number++) {
        let flag = 0;
        for (let i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0 && number != 1)
            console.log(number);
    }
}
else
    console.log("Invalid!!");