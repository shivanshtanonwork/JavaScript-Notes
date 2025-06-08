// Loops are used to execute a piece of code againa & again
// for loop
// let i = 1 is Initialize statement 
// i<=5 is stopping condition 
// i++ is updation
for (let i = 1; i <= 5; i++) {
    console.log("Shivansh Tandon is a Full Stack Developer")
}

// Calculate sum of 1 to n
let sum = 0
let n = 5
for (let i = 1; i <= n; i++) {
    sum = sum + i
}

console.log("Sum = ", sum)

//while loop
let i = 1
while (i <= 5) {
    console.log("i =", i)
    i++
}

// do-while loop

let j = 1;
do {
    console.log("Shivansh is a Full Stack Developer at Morgan Stanley")
    j++
} while (j <= 10);

/* for-of Loop - String and Arrays pe loop lagane me help karta hai*/
let str = "Shivansh"
let size = 0;
for (let alphabet of str) {
    console.log(alphabet)
    size++
}
console.log("size of String = ", size)

// for-in Loop we use it for Objects and Arrays
let employee = {
    name: "Shivansh Tandon",
    age: 26,
    company: "Morgan Stanley",
    role: "Full Stack Developer"
}

for (let key in employee) {
    console.log(key, "=", employee[key])
}

// print all even nos from 0 to 100
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// random game number
let gameNum = 25
let userNum = prompt("Guess the correct number")

while (userNum != gameNum) {
    userNum = prompt("Guess again")
}
console.log("Congratulation u entered right no.")