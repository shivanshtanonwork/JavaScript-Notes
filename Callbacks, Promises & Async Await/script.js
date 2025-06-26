//  * async await >> promise chains >> callback hell

/**  Synchronous and Asynchronous in JS
 * Synchronous means the code runs in a particular sequence of instructions
 */
console.log("One");
console.log("Two");
console.log("Three");

/* Asynchronous allows us to execute nxt instructions immediately and does'nt block the flow.
 * due to synchronous nature imp instructions get blocked and can cause delay in the UI like while fetching API there can be delay
 * so we dont want to wait to load other UI while data is being fetched so making our program asynchronous helps.
 */

// function hello() {
//   console.log("Hello Shivansh");
// }

// setTimeout(hello, 3000); //timeout 3s = 3000ms

setTimeout(() => {
  console.log("Hello Shivansh");
}, 3000);

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

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// * Callback Hell - Pyramid of Doom
getData(1, () => {
  console.log("getting data 2.....");
  getData(2, () => {
    console.log("getting data 3....");
    getData(3, () => {
      console.log("getting data 4.......");
      getData(4);
    });
  });
});
// we should use callbacks but whenever we see that there is callback hell coming then we should solve that by using promises or async await
//* To solve callback hell problems we have a concept of PROMISES
/**
 * * Promises - It is an Object in JS.Promise is for eventual completion of task
 * resolve and reject are callbacks provided by JS
 */
