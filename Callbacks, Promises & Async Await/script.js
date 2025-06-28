//  * async await >> promise chains >> callback hell

/**  Synchronous and Asynchronous in JS
 * Synchronous means the code runs in a particular sequence of instructions
 */
// console.log("One");
// console.log("Two");
// console.log("Three");

/* Asynchronous allows us to execute nxt instructions immediately and does'nt block the flow.
 * due to synchronous nature imp instructions get blocked and can cause delay in the UI like while fetching API there can be delay
 * so we dont want to wait to load other UI while data is being fetched so making our program asynchronous helps.
 */

// function hello() {
//   console.log("Hello Shivansh");
// }

// setTimeout(hello, 3000); //timeout 3s = 3000ms

// setTimeout(() => {
//   console.log("Hello Shivansh");
// }, 3000);

/**
 * Callbacks - it is a fnx passed as an argument to another fnx
 * they are always passed with its name and not with ()
 */
// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }
// calculator(2, 4, (a, b) => {
//   console.log(a + b);
// });

/**
 * Callback Hell - nested callbacks
 */

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success");
//     }, 2000);
//   });
// }
// //async await
// async function getAllData() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
//   await getData(4);
// }
//Promise Chain
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//     getData(3).then((res) => {
//       console.log(res);
//       getData(4).then((res) => {
//         console.log(res);
//       });
//     });
//   });
// });
// let promise = getData(123) in console
// * Callback Hell - Pyramid of Doom
// getData(1, () => {
//   console.log("getting data 2.....");
//   getData(2, () => {
//     console.log("getting data 3....");
//     getData(3, () => {
//       console.log("getting data 4.......");
//       getData(4);
//     });
//   });
// });
// we should use callbacks but whenever we see that there is callback hell coming then we should solve that by using promises or async await
//* To solve callback hell problems we have a concept of PROMISES
/**
 * * Promises - It is an Object in JS.Promise is for eventual completion of task
 * resolve and reject are callbacks provided by JS
 * * Promise has 3 states - 1)pending 2)fullfilled-resolve 3)rejected
 * .then() and .catch is used to use promise
 */

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     resolve("success"); // JS creates this callback fnx
//     // reject("Error");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fullfilled", res);
// });

// promise.catch((err) => {
//   console.log("Error came", err);
// });

/**
 * * Promise Chain
 */
//Suppose this is our API
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1......");
// asyncFunc1().then((res) => {
//   console.log("fetching data2......");
//   asyncFunc2().then((res) => {});
// });

// console.log("fetching data2......");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });

//* Promise chain is also difficult to understand so to solve this we use Async Await

/**
 * * Async Await are keywords in JS - Async fnx always returns a promise
 * * await pauses the execution of it surrounding async function until the promise is settled
 */

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 3000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }

/**
 * * IIFE - Immediately invoked function expression
 * IIFE is a function that is called immediately as soon as it is defined
 * this is to avoid unnecessary call of func in async wait
 * IIFE initiates code immediately and can be used once, it doesn't has function name
 * syntax - (function)();
 */

// (async function () {
//   await api();
//   await api();
// })();

// (async function () {
//   await getData(1);
//   await getData(2);
//   await getData(3);
//   await getData(4);
// })();

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`change color to ${color}`);
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  await changeColor("red", 2000);
  await changeColor("green", 2000);
  await changeColor("blue", 2000);
  await changeColor("yellow", 2000);
}

demo();
