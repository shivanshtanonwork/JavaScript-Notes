console.log("Hello")  // use to print a msg to the console
console.warn("Hello")
console.error("Hello")

// alert("Hey")

//Variables are container for data
// var random = prompt("Hello")

// Js is a Dynamically typed language i.e hum ek variable me kisi bhi type ki value ko store kr skte hain

var a = 12;  // = is assignment operator
a = 10;  // variables data can be changed

const discount = 12;  //const data cannot be changed 

/* Woh saare features jo JS me nhi hai woh present hai Window me
Window is collection of tools jo browser offer krta hai and usko hum JS me use kr sakte hai browser se call krke.
example iske console alert prompt */

fullName = "Shivansh Tandon"
console.log(fullName)

/* Let Const and Var
let and const came with ES6 features to solve issues with var
let and const are block scope varibales i.e cannot be re-declared. var can be updated. const connot be updated.
var is global scope it can be re-declared and updated */

let age = 26;
// let a; //prints undefined 
{
    let a = 10;
    console.log(a);
}
// No error cause 2 diff blocks
{
    let a = 5;
    console.log(a);
}
console.log(age)
// const b; // throw error cause const declarations should be intilased 
const PI = 3.14;
console.log(PI)

// typeof (PI)

/* objects arrays functions - non primitve datatypes - mutable(value can be changed)
Objects */
const student = {
    fullName: "Shivansh Tandon",
    age: 26,
    designation: "Full stack developer at Morgan Stanley",
};

student["age"] = student["age"] + 1;
console.log(student["age"])

console.log(student.designation)  // with . we dont need "" but with [] we need "" eg:- student.age["age"]

// if const have object -> then its key can be updated

const product = {
    title: "ball pen",
    rating: 4,
    offer: 5,
    price: 200,
}

console.log(product)

// create insta profile object

const profile = {
    username: "Shivansh Tandon",
    followers: 400,
    following: 560,
    isFollow: false,
    posts: 11,
}

