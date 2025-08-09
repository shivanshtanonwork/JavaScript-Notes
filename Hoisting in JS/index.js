// Hoisting is a phenomena in JS in which u can call the fnx and variable even before initialising it.

// In JS behind the scenes every function and variables are assigned to memory 1st then code is executed
getName();
console.log(x);

var x = 10;

function getName() {
  console.log("Namaste JS");
}

// getName();
// console.log(x);
