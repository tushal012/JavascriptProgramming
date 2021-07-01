const prompt = require('prompt-sync')();

function isPrime(number) {
    if (number >= 2) {
        let flag = 0;
        for (let i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
            return true;
        else
            return false;
    }
    else
        return false;
}

function getPalindrome(number) {
    let reversedNumber = 0;
    while (number > 0) {
        let remainder = number % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        number = Math.floor(number / 10);
    }
    return reversedNumber;
}

let userInput = prompt("Enter a number ");
if (isPrime(userInput)) {
    console.log("It is a prime number");
    let palindrome = getPalindrome(userInput);
    console.log("Palindrome number is " + palindrome);
    if (isPrime(palindrome))
        console.log("Palindrome number is also a prime number");
}
else
    console.log("It is not a prime number");