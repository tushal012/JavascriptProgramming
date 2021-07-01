const prompt = require('prompt-sync')();

    let number = prompt("Enter a number ");

    let i = 0;

    while (i <= number && Math.pow(2, i) <= 256) {
        console.log(2 ^ i) = Math.pow(2, i);
        i++;
    }