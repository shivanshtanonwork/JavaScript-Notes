// for (let i = 0; i < 5; i++) {
//   console.log("I got 15lpa job", i);
// }

for (let j = 3; j < 5; j++) {
  console.log("Yes i got it", j);
}

for (let x = 2; x < 9; x = x + 2) {
  console.log(x);
}

for (let y = 5; y > 0; y--) {
  console.log(y);
}

// adding function inside a loop
function Greet() {
  console.log("Hi Shivansh");
}
// for (let i = 0; i < 5; i++) {
//   Greet();
// }

// Array with loop
let arr = [10, 12, 5, 6, 7, 15, "Shivansh"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("Even nos in arr", arr[i]);
  }
}

/**
 * * While loop
 */

let a = 0;
while (a < 10) {
  console.log(a);
  a++;
}
