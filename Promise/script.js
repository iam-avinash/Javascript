// Promise Basics
let fs = require("fs");

let myPromise = new Promise((resolve, reject) => {
  const a = 10;
  const b = 20;
  if (a == b) {
    resolve("Yes They are equal");
  } else {
    reject("They are not equal ");
  }
});
console.log(myPromise);

myPromise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
