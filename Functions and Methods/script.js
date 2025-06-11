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