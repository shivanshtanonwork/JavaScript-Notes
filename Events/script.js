/**
 * The change in the state of the object is knows as Event
 * JS handle gets more priority than inline handling of Events
 *
 * Event Object - It is a speacial object that has details about the event
 *
 * Event Listeners - better way of handling events node.addEventListener(event, callback) - we can also access event object in this
 */

// let btn1 = document.querySelector("#btn1")

// btn1.onclick = (e) => {
//     console.log(e.target)
//     console.log(e.type)
// }

// btn1.addEventListener("click", (event) => {
//     console.log("button 1 was clicked")
//     console.log(event.target)
// })

// const handler2 = () => {
//     console.log("button was clicked - handler 2")
// }

// btn1.addEventListener("click", handler2)

// let box = document.querySelector(".box")

// box.onmouseover = () => {
//     console.log("You are inside Div")
// }

// btn1.removeEventListener("click", handler2)

// Toggler dark and light mode btn

let modeBtn = document.querySelector("#mode")
let body = document.querySelector("body")
let currMode = "light" //dark


modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark"
        // document.querySelector("body").style.backgroundColor = "black"
        body.classList.add("dark")
        body.classList.remove("light")
    } else {
        currMode = "light"
        // document.querySelector("body").style.backgroundColor = "white"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currMode)

})