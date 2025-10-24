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

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("Color changed");
    }, delay);
  });
}

async function demo() {
  await changeColor("red", 2000);
  await changeColor("yellow", 2000);
  await changeColor("blue", 2000);
  await changeColor("green", 2000);
}

demo();
