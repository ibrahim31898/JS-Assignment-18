// Chapter 9-11:

// 1.
var city = prompt("Enter city name:");
if (city === "Karachi") {
    console.log("Welcome to city of lights");
}

// 2.
var gender = prompt("Enter your gender (male/female):");
if (gender === "male") {
    console.log("Good Morning Sir");
} else if (gender === "female") {
    console.log("Good Morning Ma'am");
}

// 3.
var signalColor = prompt("Enter the color of the traffic signal:");
if (signalColor === "Red") {
    console.log("Must Stop");
} else if (signalColor === "Yellow") {
    console.log("Ready to move");
} else if (signalColor === "Green") {
    console.log("Move now");
}

// 4.
var remainingFuel = prompt("Enter remaining fuel in car (in litres):");
if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
}

// 5.
//a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

//d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

//e.
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

//f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// 6.
var subject1 = parseInt(prompt("Enter marks obtained in subject 1:"));
var subject2 = parseInt(prompt("Enter marks obtained in subject 2:"));
var subject3 = parseInt(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseInt(prompt("Enter total marks:"));

var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else if (percentage >= 40) {
    grade = "D";
} else {
    grade = "Fail";
}

console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + obtainedMarks);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);

// 7.
var secretNumber = 7; // Assuming secret number is 7
var guess = parseInt(prompt("Guess the secret number (ranging from 1 to 10):"));
if (guess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    console.log("Close enough to the correct answer");
}

// 8.
var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
    console.log(number + " is divisible by 3");
}

// 9.
var num = parseInt(prompt("Enter a number:"));
if (num % 2 === 0) {
    console.log(num + " is an even number");
} else {
    console.log(num + " is an odd number");
}

// 10.
var temperature = parseInt(prompt("Enter temperature:"));
if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
}

// 11.
var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
}

console.log("Result: " + result);


// Chapter 12-13:

// 1.
var input = prompt("Enter a character:");
if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
    if (input >= 'a' && input <= 'z') {
        console.log(input + " is a lowercase letter");
    } else if (input >= 'A' && input <= 'Z') {
        console.log(input + " is an uppercase letter");
    }
} else if (!isNaN(input)) {
    console.log(input + " is a number");
} else {
    console.log("Invalid input");
}

// 2.
var num1 = prompt("Enter first integer:");
var num2 = prompt("Enter second integer:");
if (num1 > num2) {
    console.log(num1 + " is larger");
} else if (num2 > num1) {
    console.log(num2 + " is larger");
} else {
    console.log("Both integers are equal");
}

// 3.
var number = prompt("Enter a number:");
if (number > 0) {
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// 4.
var character = prompt("Enter a character:");
var vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(character.toLowerCase())) {
    console.log("True, it's a vowel");
} else {
    console.log("False, it's not a vowel");
}

// 5.
var correctPassword = "password123";
var userPassword = prompt("Enter your password:");
if (!userPassword) {
    console.log("Please enter your password");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}

// 6.
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

// 7.
var time = parseInt(prompt("Enter time in 24-hour clock format"));
if (time >= 0 && time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
} else {
    console.log("Invalid time format");
}


// Chapter 10-14 PDF:

// Chapter 10 (if statements)
// 1.
var city = "Karachi"; 
if (city === "Karachi") { 
    console.log("The City OF Lights"); 
}

// 2.
var x = 10;
var y = 10;
if (x === y) { 
    var z = prompt("Enter value of z?");
}

// 3.
var ZipCode = "10010"; 
if (ZipCode === "10010") { 
    alert("Karachi"); 
} else { 
    alert("Please write correct city"); 
}

// 4.
var x = 1;
if (x === 1) { 
    x = 2; 
}

// Chapter 11 (Comparison Operators)
// 1.
var x = 5, y = 10;
if (x !== y) { 
    alert("x is not equal to y"); 
}

// 2.
var num1 = 20, num2 = 10;
if (num1 >= num2) { 
    alert("num1 is greater than or equal to num2"); 
}

// 3.
var a = 5;
if (a !== 10) { 
    a = 10; 
    alert("Variable a is now assigned a value of 10"); 
}

// 4.
var num1 = 5;
var num2 = 10;
if (num1 !== num2) { 
    alert("Congratulations!"); 
}

// 5.
var firstName = prompt("Enter your first name:");
if (firstName !== "Ibrahim") { 
    alert("No match"); 
}

// Chapter 12 (if…else and else if statements)
// 1.
var a = 5;
var b = 10;
if (a >= b) { 
    alert("Alert 1"); 
} else { 
    alert("Alert 2"); 
}

// 2.
var marks = 85;
if (marks >= 90) { 
    alert("Grade A"); 
} else if (marks >= 80) { 
    alert("Grade B"); 
} else { 
    alert("Grade C"); 
}

// 3.
var a = 10;
if (a === 10) { 
    alert("a is 10"); 
} else { 
    alert("The correct value of a is ____"); 
}

// 4.
var city = prompt("Enter a city:");
if (city === "Karachi") { 
    alert("Acknowledging it is Karachi"); 
} else if (city === "Lahore") { 
    alert("Acknowledging it's Lahore"); 
} else { 
    alert("Different city"); 
}

// Chapter 13 (Testing sets of conditions)
// 1.
var a = 5, b = 5, c = 10, d = 10;
if (a === b && c === d) { 
    alert("Both conditions are true");
}

// 2.
if (a === b || c !== d) { 
    
}

// 3.
var name = "Hamza";
var age = 50;
if ((name === "Hamza" || name === "Arsalan") && age < 60) { 
    alert("Either or both conditions are true");
}

// 4.
var var1 = 8, var2 = 10;
if (var1 < var2 || var1 > var2) { 
    alert("The first variable is less than or greater than the second variable"); 
}

// 5.
var firstName = "John";
var lastName = "Doe";
var userFirstName = prompt("Enter your first name:");
var userLastName = prompt("Enter your last name:");
if (userFirstName === firstName && userLastName === lastName) { 
    alert("Your first and last names match"); 
}

// Chapter 14 (If statements nested)
// 1.
var password = prompt("Enter your password:");
if (password !== "") { 
    if (password.length <= 5) { 
        alert("Password must be greater than 5"); 
    } else { 
        alert("OK"); 
    } 
}

// 2.
if (a === 1) { 
    if (c === "Max") { 
        alert("OK"); 
    } 
}

// 3.
if (a === 1 && c === "Max") { 
    alert("OK"); 
}

// 4.
var num1 = 5, num2 = 5;
if (num1 === num2 && num1 <= num2) { 
    alert("Equal"); 
}
