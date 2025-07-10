// n=4
let n = 5;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "*";
  }
  console.log(row);
}

x = 5;
for (let i = 0; i < x; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + "*";
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + "_"; // Empty spaces
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "#";
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  let s = 1;
  for (let j = 0; j <= i; j++) {
    row = row + s;
    if (s === 1) {
      s = 0;
    } else {
      s = 1;
    }
  }
  console.log(row);
}

let s = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + s;
    if (s === 1) {
      s = 0;
    } else {
      s = 1;
    }
  }
  console.log(row);
}
