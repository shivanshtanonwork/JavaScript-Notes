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


let h2 = document.querySelector("h2")
console.dir(h2)
h2.innerText = h2.innerText + " from Shivansh"
// h2.append("from Shivansh")