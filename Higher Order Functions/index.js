// function x() {
//   console.log("Hello");
// }

// function y(x) {
//   x();
// }
const radius = [3, 4, 5];
const area = function (radius) {
  return Math.PI * radius * radius;
};

console.log(radius.map(area));
