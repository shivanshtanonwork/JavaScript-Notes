//Functions - Block of code that performs a specific task, can be invoked whenever needed
function myFunction() {
    let n = 5; // Number of rows
    for (let i = 1; i <= n; i++) {
        let str = ""
        for (let j = 1; j <= i; j++) {
            str += "*"
        }
        console.log(str)
    }
}

myFunction()

//functions can have arguments
function sum(x, y) {
    console.log(x + y)
}
sum(4, 5)

function product(a, b) {
    p = a * b;
    return p
}

console.log(product(5, 4))

//Arrow Functions
const arrowSum = (t, s) => {
    return t + s
}
console.log(arrowSum(4, 5))

// function returning count of vowels in string
const countVowels = (str) => {
    let count = 0
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++
        }
    }
    console.log(count)
}

// forEach Loop in Arrays - it is a Method when we associate a function to mehtod then also it becomes method eg:- "abc".toUpperCase()-this to uppercase is method

// forEach haito function hi but voh ek Data strucure jaise Array ke saath judd jaata hai islie voh method hai
// Methods function hi hote hai associated with Functions and Objects

let arr = [1, 2, 3, 4, 5]

// arr.forEach(function printVal(val) {
//     console.log(val)
// })

arr.forEach((val) => {
    console.log(val)
})

// forEach hum tab use krte hai jab humko Array ke har ek element ke lie kuch kaam perform karana ho

let coupleName = ["Shivansh", "Vidushi"]

coupleName.forEach((val, idx, coupleName) => {
    console.log(val.toUpperCase(), idx, coupleName)
})

// callback function ke paas 3 parameters hote joki optional hote hai
// value/item , idx/position/ , array
// forEach can only be used for Arrays not Strings

// forEach - Higher order function/method bhi khelata hai
//HOF/M - kuch nhi hai bass jo bhi fnx apne andar another fnx as parameter ya return kre another fnx ko.

// array of nos print square of each value

let nos = [1, 2, 3, 99, 4, 5, 6]

nos.forEach((val) => {
    console.log(val ** 2)  // or val*val will give us same result
})
//cube 
let calCube = (num) => {
    console.log(num ** 3)
}
nos.forEach(calCube)

/* Map - it creates a new Array with the results of some operation. the value its callback returns is used to form new array
arr.map(callbackFnx(value, index, array)) - mostlty hum value hi use krte hain
*/

let newNos = nos.map((val) => {
    return val
})
console.log(newNos)

/* Filter - creates a new array of elements that give true for a conditon/filter
Eg:- all even elements
*/

let evenNos = nos.filter((val) => {
    return val % 2 === 0
})
console.log(evenNos)

// yeh humare original array nos ko change nhi krta hai yeh bass ke new copy bana deta hai

/* Reduce - performs some operation and reduces to a single value. It returns that single value
*/
// let nos = [1, 2, 3, 4, 5, 6]  //[5,2,4,9,1]
let output = nos.reduce((prev, curr) => {
    return prev + curr
})
console.log(output)  //21

// largest element nikalte hain

let largest = nos.reduce((prev, curr) => {
    return prev > curr ? prev : curr
})

console.log(largest)

// Array of marks of students. Filter out students with 90+ marks

let studMarks = [95, 90, 80, 75, 60, 98]

let toppers = studMarks.filter((val) => {
    return val > 90;
})

console.log(toppers)

// take number n as input and create array  from 1 to n. Sum of all nos. and product

let n = prompt("Enter any number")

let numArr = []

for (let i = 1; i <= n; i++) {
    numArr[i - 1] = i; //1(0), 2(1), 3(2)
}
console.log(numArr)

let sum1 = numArr.reduce((prev, curr) => {
    return prev + curr
})

console.log(`Sum = ${sum1}`)

let factorial = numArr.reduce((prev, curr) => {
    return prev * curr
})
console.log(`Product = ${factorial}`)