// console.log("Namaste");

// setTimeout(function () {
//   console.log("JavaScript");
// }, 5000);
// console.log("Shivansh");

const cart = ["shoes", "socks", "tie"];

//callback hell
api.createOrder(cart, function () {
  api.createPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
