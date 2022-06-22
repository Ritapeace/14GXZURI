console.log("Select an option");
console.log("1. ADDISION");
console.log("2. MULTIPLICATION");
console.log("3. DIVISION");
console.log("4. SUBTRACTION");
var operation = window.prompt ();


if (operation == "1") {
var num1 = window.prompt("Enter your first digit: ")
var num2 = window.prompt("Enter your second digit: ")
var additon = parseInt(num1) + parseInt(num2) 
console.log("The sum of the two numbers is: " + additon)
} else if (operation == "2"){
  var num1 = window.prompt("Enter your first digit: ")
var num2 = window.prompt("Enter your second digit: ")
var multiplication = parseInt(num1) * parseInt(num2) 
console.log("The product of the two numbers is: " + multiplication)
} else if (operation == "3"){
  var num1 = window.prompt("Enter your first digit: ")
var num2 = window.prompt("Enter your second digit: ")
var division = parseInt(num1) / parseInt(num2) 
console.log("The quotient of the two numbers is: " + division)
} else if (operation == "4"){
var num1 = window.prompt("Enter your first digit: ")
var num2 = window.prompt("Enter your second digit: ")
var subtraction = parseInt(num1) - parseInt(num2) 
console.log("The difference between the two numbers is: " + subtraction)
} else {
  console.log("Invalid input")
}
