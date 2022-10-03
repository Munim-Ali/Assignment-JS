// Tests for equality and inequality with strings
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru');

let ball = 'Opaque Shape';

console.log("Is ball == 'Opaque Shape'? I predict True.")

console.log(ball == 'Circle');

// Tests using the lower case function

let airplanes = 'Emirates'

console.log("Is aiplane == 'Emirates'.");
console.log(airplanes == 'emirates');

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1 = 23;
console.log("Is num1 == '23'.");
console.log(num1 == 23);

let num2 = 26;
console.log("Is num2 == '26'.");
console.log(num2 == '25');

let num3 = 23;
console.log("Is num3 < num2 .");
console.log(num3 < num2);

let num4 = 42;
console.log("Is num4 > num1 .");
console.log(num4 > num1);

console.log("Is num1 <= num4.");
console.log(num1 <= num4);

console.log("Is num2 >= num3.");
console.log(num2 <= num3);

//Tests using "and" and "or" operators

let x = 5
let y = 5
console.log("Is x less than 10 and y greater than 1 ? ");
console.log(x < 10 && y > 1);

let m = 5
let n = 4
console.log("The || returns true if one or both expressions are true, otherwise it returns false.");
console.log("Is m less than 10 or m greater than 1 ? ");
console.log(m < 10 || n > 1);
console.log(m == 10 || n == 5);

//Test whether an item is in a array

let names = ['Zain', 'Adeel'];
console.log("Is name is in a  arrray?");
console.log(names.includes('Zain', 0));

// Test whether an item is not in a array

let names1 = ['Zain', 'Adeel'];
console.log("Is name in a arrray?");
console.log(names.includes('Zain', 1));