// let a = 10;
// console.log(a);
// var b = 100;

// var a = 100; //shadowing
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// z();
function x() {
  //   for (let i = 1; i <= 5; i++) {
  //     setTimeout(() => {
  //       console.log(i);
  //     }, i * 2000);
  //   }
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("Hello");
}
x();
