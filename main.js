/*
 * Types of Variables
 */

// JS Number

let n = 123; // Integer number
n = 12.345; // Floating point number

console.log(n); // 12.345

// JS BigInt

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

console.log(bigInt);

// JS String

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

console.log(phrase);

// JS Boolean (logical type)

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

console.log(nameFieldChecked, ageFieldChecked);

//Boolean values also come as a result of comparisons
let isGreater = 4 > 1;

console.log(isGreater); // true (the comparison result is "yes")

// JS The "null" value

console.log( null + 1 ); // 1 ✔️

// JS The "undefined" value

console.log( undefined + 1 ); // 1 ❌ | ✔️ NaN ... Important: Undefined != 0

// JS Objects and Symbols

// When using the === operator, equal numbers are not equal, because the === operator expects equality in both type and value:
let x = 500;             
let y = new Number(500);
// document.getElementById("demo").innerHTML = (x===y);
console.log(x === y); // (x === y) is false because x and y have different types

/*
 * Arithmetic Operators
 */

// The addition operator (+) adds numbers:
let x = 5;
let y = 2;
let z = x + y;
//document.getElementById("demo").innerHTML = z;
console.log(z);

// The subtraction operator (-) subtracts numbers:
let x = 5;
let y = 2;
let z = x - y;
//document.getElementById("demo").innerHTML = z;
console.log(z);

// The multiplication operator (*) multiplies numbers:
let x = 5;
let y = 2;
let z = x * y;
// document.getElementById("demo").innerHTML = z;
console.log(z);

// The division operator (/) divides numbers:
let x = 5;
let y = 2;
let z = x / y;
//document.getElementById("demo").innerHTML = z;
console.log(z);

// The modulus operator (%) returns the division remainder:
let x = 5;
let y = 2;
let z = x % y;
//document.getElementById("demo").innerHTML = z;
console.log(z);

// The increment operator (++) increments numbers:
let x = 5;
x++;
let z = x;
//document.getElementById("demo").innerHTML = z;
console.log(z);

// The decrement operator (--) decrements numbers:
let x = 5;
x--;
let z = x;
//document.getElementById("demo").innerHTML = z;
console.log(z);

// The exponentiation operator (**) raises the first operand to the power of the second operand:
let x = 5;
//document.getElementById("demo").innerHTML = x ** 2;
console.log(x ** 2);

/*
 * Negations and Falseys
 */

// Strict-non-equality:
// Tests whether the left and right values are not identical to one another
console.log(5 !== 2 + 3);

/*
 * And and Or
 */

// Or

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

// And

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

/*
 * Comparisons with ==, ===, >=, >, .., etc.
 */

// Alert true, when x is greater than y
x = 10;
y = 5;
//alert(x > y);

console.log(x > y); // true

//  Alert true, when x is equal to y
x = 10;
y = 10;
//alert(x == y);

console.log(x = y); // 10
console.log(x == y); // true

// Alert true, when x is NOT equal to y.
x = 10;
y = 5;
//alert(x != y);

console.log(x != y); // true

// Conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough"
n = 20;
//n = 17;

var age = n;
var voteable = (age < 18) ? "Too young" : "Old enough";
//alert(voteable);

console.log(voteable);  // Old enough
