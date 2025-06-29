let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }
      h1.style.color = color;
      console.log(`change color to ${color}`);
      resolve("color changed");
    }, delay);
  });
}
//handling rejection in promise using async await try-catch
async function demo() {
  try {
    await changeColor("red", 2000);
    await changeColor("green", 2000);
    await changeColor("blue", 2000);
    await changeColor("yellow", 2000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }
  console.log(15);
}

demo();
