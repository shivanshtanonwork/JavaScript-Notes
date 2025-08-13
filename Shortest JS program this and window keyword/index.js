var a = 15  // global space

function b() { // global space
    var x = 10 // this is not global space
}

console.log(window.a);
console.log(this.a); // this == window