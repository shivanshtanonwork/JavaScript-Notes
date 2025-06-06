/* This is a
    multiline comment */

// Arithmetic Operators + - / *

// Unary Operators a++ a-- (post) --a ++a (pre)

//Assignment Operators - assign values  = += -= %= *= **=  in Js value propagates from right to left

//Comparison Operatos -  == equal to , === equal to & data type, != , !===, >, <, <=,>=

//Logical Operators - && log and , || log OR, ! log not

// Conditional Statements

let mode = "light"
let color

if (mode === "dark") {
    color = "black"
} else {
    color = "white"
}
console.log(color) //white

// odd even

let x = 10;
if (x % 2 === 0) {
    console.log(x, "is Even")
} else {
    console.log(x, "is Odd")
}

// Ternary Operators - simpler/compact if-else
let age = 26
let result = age > 18 ? "Adult" : "Not adult"
console.log(result)

//Practice qs
let number = prompt("Enter a number")

if (number % 5 === 0) {
    console.log(number, " is Multiple of 5")
} else {
    console.log(number, " is Not multiple of 5")
}

// student grades and score

let score = prompt("Enter your marks")
let grade

if (score >= 90 && score <= 100) {
    grade = "A"
} else if (score >= 70 && score <= 89) {
    grade = "B"
} else if (score >= 0 && score <= 69) {
    grade = "C"
}

console.log("Your grade is :", grade)