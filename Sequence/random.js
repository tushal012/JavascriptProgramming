//To get single digit with random function
let number = Math.floor(Math.random() * 10);
console.log("single digit number is " + number);

//use random number to get dice number between1 to 6
let diceNum = Math.floor(((Math.random() * 10) % 6) + 1);
console.log("The dice number is " + diceNum);

//Add two Random Dice Number and Print the Result
let diceNumber1 = Math.floor(((Math.random() * 10) % 6) + 1);
let diceNumber2 = Math.floor(((Math.random() * 10) % 6) + 1);
let diceSum = diceNumber1 + diceNumber2;
console.log("The sum of dice numbers is " + diceSum);

// To read 5 Random 2 Digit values then find their sum and the average
let num1 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let num2 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let num3 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let num4 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let num5 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let sum = num1 + num2 + num3 + num4 + num5;
let average = sum / 5;
console.log("Sum of number " + sum + " Average of number " + average);

//unit conversion feet to inch
var feet = parseInt(prompt("Please enter feet:"));
var inches = feet * 12;
console.log(inches + " Inches");


let lengthFeet = 60;
let breadthFeet = 40;
let lengthMeters = lengthFeet * 0.3048; 
let breadthMeters = breadthFeet * 0.3048;
console.log("Plot size is " + lengthMeters + " meters x " + breadthMeters + " meters");

let numberOfPlots = 25;
let area = numberOfPlots * lengthInMeters * breadthInMeters;
console.log("Area of " + numberOfPlots + " plots is " + area);


