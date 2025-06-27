/**
 * *The Fetch API provides an interface for fetching(sending/receiving) resources
 * It uses Request and Response objects
 * The fetch() method is used to fetch a resource(data)
 * https://free-apis.github.io/#/browse
 */

const URL = "https://jsonplaceholder.typicode.com/posts";
const factHeading = document.querySelector("#fact");
const btn = document.querySelector(".btn");

const getFacts = async () => {
  //   let response = await fetch(URL); // GET request
  let response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Meow Title",
      body: "Meow Body",
      userId: 1,
    }),
  }); // this is Post request
  console.log(response);
  let data = await response.json();
  //   console.log(data);
  //   factHeading.innerHTML = data[0].title; // GET
  factHeading.innerHTML = data.body;
};

btn.addEventListener("click", getFacts);

// * JSON - Javscript object notation json() - asynchronous method hota hai returns a second promise pehla fetch ne krdiya hota hai
// Input in JSon and Output in JS nikalta hai
