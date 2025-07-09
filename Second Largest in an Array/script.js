/**
 * * Second Largest no. in an Array
 */

let arr = [5, 15, 7, 15, 9, 2, 10];

function SecondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(SecondLargest(arr));
