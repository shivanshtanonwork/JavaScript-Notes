// Suppose this is our API
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("success");
    }, 4000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1......");
asyncFunc1().then((res) => {
  console.log("fetching data2......");
  asyncFunc2().then((res) => {});
});
