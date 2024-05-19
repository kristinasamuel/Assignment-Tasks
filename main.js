#! /usr/bin/env node
// HOME WORK 2ND
// TASKS
// 1. Miles-to-Kilometers Converter (Operators):
// Creat a variable named miles and design a numeric value representing distance in miles.
// calculate the equivalent distance in kilometers using the conversion factor (1 mile=
// 1.60934 kilometers). you can achieve this by multiplying miles by 1.60934
// store the converted distance in kilometers in a variable named kilometers.
// use console.log to print a message in the following format:
// the distance of 130 kms is equal to 209.2142 miles
let miles = 100;
let distanceInKilometers = 100 * 1.60934; // 160.935
let kilometers = 160.935;
let kilometers1 = 130;
let miles1 = 209.2142;
console.log(`The distance of ${kilometers1} kms is equal to ${miles1} miles `);
// 2.Evaluating a number game:
// prompt the user to enter the number.
// compare the entered number with a dynamic number value.
// output the result indicating  whether the entered number is greater,equal to, or less then the
//  dynamic number value.
import inquirer from "inquirer";
let dynamicNum = 8;
let user = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please enter the number",
    },
]);
if (user.name == dynamicNum) {
    let result = `${user.name} is equal to the dynamic number ${dynamicNum}`;
    console.log(result);
}
else if (user.name > dynamicNum) {
    let result = `${user.name} is greater then the dynamic number ${dynamicNum}`;
    console.log(result);
}
else if (user.name < dynamicNum) {
    let result = `${user.name} is less then the dynamic number ${dynamicNum}`;
    console.log(result);
}
// Q3: calculator project using function
// set up two variable containing number values
// set up a operator to hold (+ ,-)
// creat a function that takes two number and an operator as parameter, perform the corresponding operation
// ,and return the result .
// call the function with the variable and operator,and output the result using console.log.
// update the operator value and call the function again with the updated arguments.
let num1 = 44;
let num2 = 55;
let operator = "+";
function calculator(num1, num2, operator) {
    if (operator == "+") {
        let result = num1 + num2;
        console.log(result);
    }
    else if (operator == "-") {
        let result = num1 - num2;
        console.log(result);
    }
}
calculator(num1, num2, "+"); // first call
calculator(22, 15, "-"); // call function again with updated argument
// Q4: functions:
// set up two different variable with different values.
// call a function with these variable as arguements and output the result using console.log.
// creat a secound call to the function with two more numbers an argument
let n1 = 10;
let n2 = 20;
function add(n1, n2) {
    console.log(n1 + n2);
}
add(n1, n2); // first call
let n3 = 22;
let n4 = 35;
add(n3, n4); // secound call (updated)
//  Q5: anonymous function:
// assign a function expression to a variable , with one parameter that outputs the provided argument to the console.
// pass an argument into the function.
// creat the same function as a normal function declaration
// Anonymous function
let car = function (name) {
    console.log(name);
};
car("toyota");
// simle function
function cars(name) {
    console.log(name, "is my favorite car");
}
cars("Civic");
