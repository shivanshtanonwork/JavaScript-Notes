/**
 * * Loop in Loop
 */

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    // console.log(i, j);
  }
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    // console.log(i, j);
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = i; j >= 0; j--) {
    // console.log(i, j);
  }
}

//reversing
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
