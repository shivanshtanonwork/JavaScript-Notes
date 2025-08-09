// WAF to count no. of digits in a number

let num = 1503;

function countDigits(num) {
  if (num == 0) return 1;
  num = Math.abs(num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
const result = countDigits(num);
console.log(result);
