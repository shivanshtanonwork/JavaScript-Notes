// function x() {
//   console.log("Hello");
// }

// function y(x) {
//   x();
// }
// const radius = [3, 4, 5];
// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// console.log(radius.map(area));
const users = [
  {
    firstName: "Shivansh",
    lastName: "Tandon",
    age: 26,
  },
  {
    firstName: "Aanvee",
    lastName: "Sood",
    age: 5,
  },
  {
    firstName: "Palak",
    lastName: "Sood",
    age: 35,
  },
];

let FullName = users.map((val) => val.firstName + " " + val.lastName);

console.log(FullName);

let totalAge = users.reduce((acc, curr) => {
  return acc + curr.age;
}, 0);

console.log(totalAge);

let canVote = users.filter((val) => val.age >= 18).map((x) => x.age);

console.log(canVote);
