/* The 3 musketeers of Web Dev
 HTML (Structure)
 CSS (style)
 JS (logic)
 */

// Window - its and object not JS. It is browser's object
// its a global object with lots of propeties and methods
// eg- console.log , alert etc
// console.log(window)

// when a web page is loaded, the browser creates Document Object Model(DOM) of the page

//console.dir(window.document)

// let heading = document.getElementById("header")
// console.log(heading)

// let heading = document.getElementsByClassName("heading")
// console.log(heading)

// let elements = document.querySelector("p")
// console.log(elements)

// class ke lie ".myClass" and id ke lie "#myId"

// .innerHTML - html with text and .innerText - only text
// textContent - shows hidden element text


// let h2 = document.querySelector("h2")
// console.dir(h2)
// h2.innerText = h2.innerText + " from Shivansh"
// // h2.append("from Shivansh")

// let divs = document.querySelectorAll(".box")
// // divs[0].innerText = "You are 1"
// // divs[1].innerText = "You are 2"
// // divs[2].innerText = "You are 3"
// let idx = 1
// for (div of divs) {
//     div.innerText = `You are ${idx}`
//     idx++
// }

// let div = document.querySelector("div")
// console.log(div.getAttribute("id"))
// console.log(div.setAttribute("id", "boxId"))

// let header = document.querySelector("h2")

// header.style.backgroundColor = "green"

// let newBtn = document.createElement("button")
// newBtn.innerText = "CLick me"

// let div = document.querySelector("div")
// div.after(newBtn)

// let newHeading = document.createElement("h1")
// newHeading.innerHTML = "<i>Hi, I'm new </i>"

// document.querySelector("body").prepend(newHeading)

// let para = document.querySelector("p")
// para.remove()

// Assignment 

let btn = document.createElement("button")
btn.innerText = "Click Me"
btn.style.backgroundColor = "red"
btn.style.color = "white"

document.querySelector("body").prepend(btn)

let para = document.querySelector("p")

para.classList.add("newClass")