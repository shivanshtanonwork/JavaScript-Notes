// let a = 10;
// console.log(a);
// var b = 100;

var a = 100; //shadowing
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
