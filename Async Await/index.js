// Coffee  Shop Example using Promise Chaining

function placeOrder(drink) {
  return new Promise((resolve, reject) => {
    if (drink === "coffee") {
      resolve("Order for coffee is Placed");
    } else {
      reject("Order not Placed , we dont serve other drinks");
    }
  });
}

function processDrink(orderStatus) {
  return new Promise((resolve) => {
    resolve(`${orderStatus} is ready to be served`);
  });
}

function generateBill(orderProcessed) {
  return new Promise((resolve) => {
    resolve(`${orderProcessed} and bill is Rs-500`);
  });
}
// let placeOrderPromise = placeOrder("coffee");

// placeOrderPromise
//   .then((orderStatus) => {
//     console.log(orderStatus);
//     return processDrink(orderStatus);
//   })
//   .then((orderProcessed) => {
//     console.log(orderProcessed);
//     return generateBill(orderProcessed);
//   })
//   .then((orderProcessed) => {
//     console.log(orderProcessed);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Coffee  Shop Example using Async Await

async function serveOrder() {
  try {
    let orderStatus = await placeOrder("coffee");
    let orderProcessed = await processDrink(orderStatus);
    let bill = await generateBill(orderProcessed);
    console.log(bill);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();
