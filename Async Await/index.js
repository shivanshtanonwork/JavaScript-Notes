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
