/**
 * * WAF that search for an element in array & returns index,
 * * if el. is not present then returns -1
 */

// let arr = [1, 5, 10, 6, 15, 20, 0, 2];

function SearchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

/**
 * * WAF that returns the no. of -ive nos in an array
 */

// let arr = [-1, -2, 5, 6, -9, 10, -15];

function CountNegativeEl(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

/**
 * * WAF that return the largest no in an array
 */

let arr = [1, 5, -10, 6, 15, -20, -99, 0, 2];

function LargestNo(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Smallest no. in Array
function SmallestNo(arr) {
  let smallest = arr[0]; //Infinity bhi likh skte hain
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
