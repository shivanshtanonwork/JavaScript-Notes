// Arrays - Collection of items
// Arrays is a type of object but instead of key:value  it has index:value
let heroes = ["ironman", "hulk", "thor", "batman", "superman"]

// Array indices
let marks1 = [97, 82, 64, 76] // value are stored in linear fashion in Arrays
console.log(marks1[3])
// we can change the value of arrays as well
console.log(marks1[3] = 99)
// Array is mutable but strings are immutable

// looping over arrays
// for(let i = 0; i< heroes.length; i++){
//     console.log(heroes[i])
// }

for (let name of heroes) {
    console.log(name)
}

// avg marks of entire class

let marks = [85, 97, 44, 37, 76, 60]
let sum = 0
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length
console.log(avg)

//10% off on items

let items = [250, 645, 300, 900, 50]
// let i = 0
// for (let val of items) {
//     let offer = val / 10
//     items[i] = items[i] - offer
//     console.log(items[i])
//     i++
// }

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10
    items[i] -= offer
}
console.log(items)

// Arrays methods
// push() pop() toString() slice() splice()

// Practice
let companies = ["Bloomberg", "Microsoft", "Google", "Morgan Stanley", "IBM", "Netflix"]
companies.shift()
companies.splice(3, 1, "EY")
companies.push("Amazon")
