async function getData() {
  return "Hello Shivansh";
}

const data = getData();
// console.log(data);

data.then((res) => console.log(res));

// //creating a Promise
// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolved value");
// });

// //using promise
// p.then((res) => console.log(res));

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       console.log(`color changed to ${color}`);
//       resolve("Color changed");
//     }, delay);
//   });
// }

// async function demo() {
//   await changeColor("red", 2000);
//   await changeColor("yellow", 2000);
//   await changeColor("blue", 2000);
//   await changeColor("green", 2000);
// }

// demo();

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 2000);
// });

// async function handlePromise() {
//   const val = await p1;
//   console.log("Hello 1");
//   console.log(val);

//   const val2 = await p2;
//   console.log("Hello 2");
//   console.log(val2);
// }
// handlePromise();
const API_URL = "https://api.github.com/users/shivanshtanonwork";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
